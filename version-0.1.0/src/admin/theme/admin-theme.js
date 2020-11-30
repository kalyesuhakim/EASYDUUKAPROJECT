import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   light: "#484848",
    //   dark: "#000000",
    //   main: "#212121",
    //   contrastText: "#ffffff"
    // },
    // secondary: {
    //   light: "#ffffff",
    //   dark: "#bcbcbc",
    //   main: "#eeeeee",
    //   contrastText: "#000000"
    // },
    primary: {
      light: "#4890c9",
      dark: "#125183",
      main: "#1B75BC",
      contrastText: "#fff",
    },
    secondary: {
      main: "#EF4136",
      light: "#f2675e",
      dark: "#a72d25",
      text: "#fff",
    },
    colored: {
      green: "#00FF00",
    },
    type: "light",
  },
  typography: {
    h1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  appBarHeight: "60px",
  secondaryAppBarHeight: "60px",
  sideBarWidth: "100px",
  boxShadows: [
    `0 1px 2px 0 rgba(0,0,0,0.05)`,
    `0 2px 5px 0 rgba(0,0,0,0.05)`,
    `0 5px 10px 0 rgba(0,0,0,0.05)`,
    `0 10px 15px 0 rgba(0,0,0,0.05)`,
    "1px 2px 1px -1px rgba(0,0,0,-2.8), 0px -1px 1px 0px rgba(0,0,0,-0.96), 0px 3px 15px 0px rgba(0,0,0,0.12)",
  ],
});

export default theme;
