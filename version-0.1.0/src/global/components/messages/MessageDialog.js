import React from "react";
import { Fab, Paper } from "@material-ui/core";
import { Message, Close, Phone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import MessagePanel from "./MessagePanel";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "20px",
    bottom: "90px",
    zIndex: theme.zIndex.appBar + 1,
    height: "80vh",
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      bottom: "0px",
      top: "0px",
      right: "0px",
      left: "0px",
      minHeight: "100vh",
      height: "100%",
      width: "100%",
      minWidth: "100vw",
    },
  },
  rootButton: {
    position: "fixed",
    zIndex: theme.zIndex.appBar + 10,
    bottom: "60px",
    right: "20px",
    // [theme.breakpoints.down("xs")]: {
    //   right: `calc(100% - 100px)`,
    // },
  },
  innerWarpper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  panel: {
    height: `calc(100% - 70px)`,
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "100%",
      marginBottom: "0px",
    },
  },
  phone: {
    bottom: "130px",
  },
}));
export default function MessageDialog(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    open: false,
    inView: false,
  });

  let panel = "";

  const closePanel = () => {
    setState({ ...state, open: !state.open, inView: true });
  };

  if (state.open) {
    panel = (
      <div className={classes.root + " animated slideInRight"}>
        <div className={classes.innerWarpper}>
          <Paper className={classes.panel}>
            <MessagePanel closePanel={closePanel} />
          </Paper>
        </div>
      </div>
    );
  } else {
    if (state.inView) {
      panel = (
        <div className={classes.root + " animated slideOutRight"}>
          <div className={classes.innerWarpper}>
            <Paper className={classes.panel}>
              <MessagePanel />
            </Paper>
          </div>
        </div>
      );
    }
  }
  return (
    <React.Fragment>
      {panel}
      <Fab
        title="+256702894346"
        component="a"
        href="tel:+256702894346"
        style={{
          backgroundColor: "#3BB54A",
        }}
        color="primary"
        className={classes.rootButton + " " + classes.phone}
      >
        <Phone />
      </Fab>
      <Fab onClick={closePanel} color="primary" className={classes.rootButton}>
        {!state.open ? <Message /> : <Close />}
      </Fab>
    </React.Fragment>
  );
}
