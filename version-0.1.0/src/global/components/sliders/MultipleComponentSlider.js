import React from "react";
import {
  Paper,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import propTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { makeUrl } from "../../hooks";
import { ArrowForwardOutlined } from "@material-ui/icons";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "200px",
    // padding: theme.spacing(2),
    marginTop: "0px",
    "& .carousel .thumbs-wrapper": {
      margin: "auto",
    },
    "& .carousel .slide": {
      backgroundColor: "transparent",
    },
    "& .carousel.carousel-slider .control-arrow": {
      display: "none",
    },
    "& .carousel .carousel-status": {
      display: "none",
    },
    "& .carousel .control-dots": {
      display: "none",
    },
  },
  innerRoot: {
    overflowX: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  prodCardRoot: {
    width: "170px",
    height: "100%",
    padding: theme.spacing(1),
    textDecoration: "none",
    outline: "none",
  },
  prodCardRootInner: {
    height: "100%",
    width: "100%",
    padding: theme.spacing(1),
    "&:hover": {
      boxShadow: theme.boxShadows[2],
    },
  },
  prodImgWrapper: {
    width: "100%",
  },
  imgProdPreview: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  prodCardHeader: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    fontWeight: 700,
    color: theme.palette.primary.path,
  },
  prodDetWrapper: {
    marginTop: theme.spacing(2),
    align: 'left',
    width: '100%'
  },
  productName: {
    color: theme.palette.secondary.path,
    // fontWeight: 300,
    fontSize: '14px'
  },
  productPrice: {
    color: theme.palette.secondary.path,
    fontWeight: 500,
  }
}));
/**
 * Slider with many products
 * prodList => an array or products passed down as props
 * prodCard => single product component takes in image and price props
 *
 */
export default function MultipleComponentSlider(props) {
  const classes = useStyles();
  //console.log(props.productsList);
  var prodList = props.productsList || [];
  var prodChunks = [];
  var maxView = props.maxView || 5
  if (prodList.length > maxView) {
    while (prodList.length > maxView) {
      prodChunks.push(prodList.slice(0, maxView));
      prodList = prodList.slice((maxView - 1));
    }
    prodChunks.push(prodList)
  } else {
    prodChunks.push(prodList);
  }

  return (
    <Paper square elevation={0} className={classes.root}>
      <div className={classes.prodCardHeader}>
        <div>
          <Typography>{props.title}</Typography>
        </div>
        <div>
          <Button endIcon={<ArrowForwardOutlined />}>See All</Button>
        </div>
      </div>

      <Carousel>
        {prodChunks.map((row, index) => (
          <div key={index} className={classes.innerRoot}>
            {row.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        ))}
      </Carousel>
    </Paper>
  );
}

MultipleComponentSlider.propTypes = {
  productList: propTypes.arrayOf(
    propTypes.shape({
      productPreview: propTypes.string.isRequired,
      productPrice: propTypes.any,
      productName: propTypes.string,
    })
  ),
};

function ProductCard(props) {
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      square
      component={Link}
      to={"/product/" + makeUrl(props.productName) + ".html"}
      className={classes.prodCardRoot}
      align="center"
    >
      <div className={classes.prodCardRootInner}>
        {/* <div>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton>
          <ShareOutlined />
        </IconButton>
      </div> */}
        <div className={classes.prodImgWrapper}>
          <img src={props.productPreview} className={classes.imgProdPreview} />
        </div>
        <div className={classes.prodDetWrapper} align="left">
          <Typography noWrap={true} className={classes.productName}>
            {props.productName}
          </Typography>
          <Typography className={classes.productPrice}>
            {props.productPrice} UGX
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
ProductCard.propTypes = {
  productPreview: propTypes.string.isRequired,
  productPrice: propTypes.any.isRequired,
};
