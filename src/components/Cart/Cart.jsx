import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const { classes } = useStyles();

  if (!cart.line_items)
    return (
      <Container>
        <div className={classes.toolbar} />
        <Typography className={classes.loadingScreen} variant="subtitle2">
          Loading...
        </Typography>
      </Container>
    );

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{" "}
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            variant="contained"
            type="button"
            color="secondary"
            onClick={onEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkout}
            size="large"
            variant="contained"
            type="button"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
