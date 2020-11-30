import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import appLinks from "../../routes/appLinks";
import Images from '../../images/images'
import theme from "../../theme/app-theme";
import { KeyboardArrowDown, KeyboardArrowUp, KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: grey[50],
    minHeight: "50vh",
    width: "100%",
    paddingBottom: "40px",
  },
  
}));

export default function LandingMain(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Helmet>
        <title>Easy Duuka</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Some page descriptions here"
        />
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:url" content={pageurl} /> */}
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Typography variant="h1">
        Landing Page
      </Typography>
    </div>
  );
}
