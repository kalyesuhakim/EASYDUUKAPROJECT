import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
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
      orange: "#F18D1E",
    },
    type: "light",
    mainWrapper: {
      grads: {
        innerRoot: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
        appbarWrapper: {
          // backgroundColor: "rgba(245, 124, 0, 0.8)", // orange
          backgroundColor: "rgba(53, 69, 79, 0.9)", // blueGrey
        },
      },
    },
    grads: {
      transWhite: {
        backgroundColor: "rgba(100%, 100%, 100%, 0.5)", // white background
      },
    },
  },
  boxShadows: [
    `0 1px 2px 0 rgba(0,0,0,0.05)`,
    `0 2px 5px 0 rgba(0,0,0,0.05)`,
    `0 5px 10px 0 rgba(0,0,0,0.05)`,
    `0 10px 15px 0 rgba(0,0,0,0.05)`,
  ],
  typography: {
    color: "#085F9B",
    fontWeightRegular: 300,
  },
});

export default theme;
