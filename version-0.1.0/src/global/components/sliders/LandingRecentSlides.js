import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import Images from "../../images/images";
import { grey } from "@material-ui/core/colors";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .carousel .thumbs-wrapper": {
      margin: "auto",
    },
  },
  slideRoot: {
    width: "100%",
    minHeight: "300px",
    boxShadow: theme.boxShadows[0],
    background: grey[50],
    "& :hover": {
      boxShadow: theme.boxShadows[2],
      cursor: "pointer",
    },
  },
  slideWrapper: {
    position: "relative",
    height: "300px",
  },
  imgSlide: {
    width: "100%",
    height: "100%",
  },
  sliderMask: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.5)",
    top: "0px",
    padding: theme.spacing(3),
  },
  heading: {
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  text: {
    color: theme.palette.common.white,
  },
}));

export default function LandingRecentSlides(props) {
  const slides = Images.paths.sliders;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Carousel showThumbs={false} showStatus={false}>
        {slides.map((slide, index) => (
          <Slide path={slide} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

function Slide(props) {
  const classes = useStyles();
  return (
    <div className={classes.slideRoot}>
      <div className={classes.slideWrapper}>
        <img src={props.path} className={classes.imgSlide} />
      </div>
    </div>
  );
}
