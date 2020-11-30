import React from "react";
import { makeStyles, Grid, Container,} from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { mappedLinks } from "../../maps";
import WebHack from "../../../site/pages/Campaigns/WebHack";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "100vh",
    padding: "0px",
    margin: "0px",
    // backgroundColor: grey[200],
  },
  innerRoot: {
    width: "100%",
    padding: "0px",
    margin: "0px",
    minHeight: '100vh',
    marginTop: "50px",
  },
  appbarWrapper: {
    width: "100%",
    maxWidth: "100%",
    padding: "0px",
    margin: "0px",
    minHeight: '80px',
  },
}));

export default function MainWrapper(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.appbarWrapper}>
        <Container>{props.appbar}</Container>
      </div>

      <div className={classes.innerRoot}>
        <Container className={classes.pathWrapper}>
          <Grid container justify="center">
            <Grid item xs={12} sm={12} >
              {props.children}
            </Grid>
          </Grid>
        </Container>
        <Switch>
          <Route path={mappedLinks.webHack.path}>
            <WebHack />
          </Route>
        </Switch>
      </div>
      {/* <MessageDialog /> */}
    </div>
  );
}






