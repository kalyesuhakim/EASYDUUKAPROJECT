import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import Images from "../../../site/images/images";
import { Link } from "react-router-dom";
import appLinks from "../../../site/routes/appLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: blueGrey[500],
  },
  img: {
    width: "100%",
    height: "auto",
  },
}));

export default function PageNotFound(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justifyContent="center">
      <Grid xs={12} md={8} lg={7} align="center">
        <LazyLoadImage src={Images.pageNotFound} className={classes.img} />
        <Button
          component={Link}
          to={appLinks.home.path}
          variant="contained"
          style={{ borderRadius: "20px" }}
          className="btn-round animated pulse"
          endIcon={<ArrowBack />}
          color="secondary"
        >
          Back to Home
        </Button>
      </Grid>
    </Grid>
  );
}
