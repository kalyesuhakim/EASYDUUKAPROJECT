import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Button,
  Hidden,
} from "@material-ui/core";
import { KeyboardArrowLeftOutlined } from "@material-ui/icons";
import { Link,  Switch, Route } from "react-router-dom";
import appLinks from "../../routes/web";
import LazyImage from "../../../admin/components/LazyImage";
import { HOST } from "../../config/config";
import { grey, blueGrey } from "@material-ui/core/colors";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
    minHeight: "50vh",
  },
  textHeading: {
    fontWeight: 900,
    color: blueGrey[500],
  },
  text: {
    fontWeight: 300,
    color: grey[500],
  },
  imgFluid: {
    width: "100%",
    height: "auto",
  },
  imgHeight: {
    height: "200px",
    width: "auto",
  },
}));

export default function SomeThingIsNotRight(props) {
  const classes = useStyles();
  document.title = "Something is not Right";
  return (
    <Switch>
      <Route
      exact
        path={appLinks.error.path}
        render={(props) => (
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.root}
          >
            <Hidden mdUp>
              <Grid item xs={12} sm={4} md={4} align="center">
                <LazyLoadImage
                  src={HOST + "/images/server-error.png"}
                  className={classes.imgHeight}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6} md={5}>
              <Typography variant="h3" className={classes.textHeading}>
                Error
              </Typography>
              <Typography variant="h5" className={classes.text + " mt-3"}>
                Some thing is not right.
                <br />
                The link you are tying to access might have expired
              </Typography>
              <Button
                startIcon={<KeyboardArrowLeftOutlined />}
                color="secondary"
                component={Link}
                to={appLinks.home.path}
                className="mt-3"
              >
                Back to Home
              </Button>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={12} sm={4} md={5}>
                <LazyLoadImage
                  src={HOST + "/images/server-error.png"}
                  className={classes.imgFluid}
                />
              </Grid>
            </Hidden>
          </Grid>
        )}
      />
    </Switch>
  );
}
