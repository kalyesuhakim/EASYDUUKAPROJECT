import React from 'react'
import { TextField, ThemeProvider, Button, CircularProgress } from '@material-ui/core'
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#1a73e8",
      dark: "#1a73e8",
      main: "#1a73e8",
      contarstText: "#1a73e8"
    },
    secondary: {
      main: "#ff8c00",
      light: "#ffbd45",
      dark: "#c55d00",
      text: "#000000"
    },
    colored: {
      green: "#00FF00",
      orange: "#F18D1E"
    },
    type: "light"
  }
});




export default function MyTextField(props){
    return (
      <ThemeProvider theme={theme}>
        <TextField {...props} />
      </ThemeProvider>
    );
}


export function MyButton(props){
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>
  );
}

export function MyCircularProgress(props){
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress {...props} />
    </ThemeProvider>
  );
}

export function MyTheme(props){
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}