import React from "react";
import { Grid, Paper, makeStyles, Button, Typography } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { grey, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    boxShadow: theme.boxShadows[3],
  },
  rootInner: {
    padding: theme.spacing(2),
  },
  prodWrapper: {
    "&:hover": {
      boxShadow: theme.boxShadows[2],
    },
    cursor: "pointer",
  },
  prodPrevWrapper: {
    width: "100%",
  },
  prodPrev: {
    width: "100%",
    height: "120px",
  },
  gridHeader: {
    width: "100%",
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: yellow[600],
  },
  productName: {
    color: theme.palette.secondary.path,
    fontSize: "15px",
    // fontWeight: 300,
  },
  productPrice: {
    color: theme.palette.secondary.path,
    fontSize: "18px",
    // fontWeight: 300,
  },
}));

export default function ProductListGrid(props) {
  const classes = useStyles();
  const products = props.itemsList || [];
  const fullGridView = props.fullGridView || false;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.gridHeader}>
        <div>
          <Typography>{props.listHeader}</Typography>
        </div>
        <div>
          <Button endIcon={<ArrowForward />}>Sell All</Button>
        </div>
      </div>
      <Grid container spacing={3} className={classes.rootInner}>
        {products.slice(0, 12).map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={3}
            lg={2}
            className={classes.prodWrapper}
          >
            <ProductListGridItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

function ProductListGridItem(props) {
  const classes = useStyles();
  return (
    <Paper square elevation={0} className={classes.rootProd}>
      <div className={classes.prodPrevWrapper}>
        <img src={props.productPreview} className={classes.prodPrev} />
      </div>
      <div className={classes.prodDesc + " mt-2"}>
        <Typography noWrap={true} className={classes.productName}>
          {props.productName}
        </Typography>
        <Typography noWrap={true} className={classes.productPrice}>
          {props.productPrice}
        </Typography>
      </div>
    </Paper>
  );
}
