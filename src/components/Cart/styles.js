import { makeStyles } from "tss-react/mui";

export default makeStyles()((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
  loadingScreen: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
}));
