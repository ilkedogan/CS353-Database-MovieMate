import { makeStyles } from "@mui/styles";
import Constants from "../utils/Constants";

const useStyles = makeStyles({
  //Main Screen
  bg: {
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: Constants.MOVIEMATE_BACKGROUND,
    color: Constants.MOVIEMATE_BACKGROUND,
    "@media only screen and (max-width: 800px)": {
      background: Constants.MOVIEMATE_BACKGROUND,
    },
    overflowX: "hidden",
  },
  //Navbar 
  navbar: {
    width: "100vw",
    fontFamily: Constants.ROKKIT_FONT_FAMILY,
    zIndex: "1000",
    position: "fixed",
    top: "0",
    backgroundSize: "cover",
    backgroundColor: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
    color: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
    "@media only screen and (max-width: 800px)": {
      background: Constants.MOVIEMATE_NAVBAR_BACKGROUND,
    },
    overflowX: "hidden",
  },
  logo: {
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    width: "80px",
    color: "white",
    height: "68px",
    paddingLeft: "30px",
    justifyContent: "start",
  },
  log_reg: {
    fontSize: "32px",
    color: "white",
    height: "68px"
  },
  searchBar: {
    display: "flex",
    alignContent:"center",
    backgroundColor: "white",
    "@media only screen and (max-width: 800px)": {
      fontSize: "10px",
      backgroundColor: "white",
    },
    top:15,
    height:"5vh",
    maxHeight:"5vh",
    borderRadius: Constants.BORDER_RADIUS,
  },
  icons: {
    display: "flex",
    alignItems: "center",
    height: "68px",
    marginTop: "2px",
  },
  anIcon: {
    color: "black",
    minWidth: "40px",
    minHeight: "40px",
    borderRadius: "50px",
    display: "flex",
    
   },
  iconBg: {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
});

export { useStyles }