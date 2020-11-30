import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import OrdersSearchBar from './OrdersSearchBar';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    btn: {
        color: blueGrey[500],
    },
    root: {
        borderBottom: `solid 1px ${blueGrey[500]}`
    }
}));

export default function OrdersToolBar(props){
    const classes = useStyles();
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} lg={7}>
          <Button className={classes.btn}>All</Button>
          <Button className={classes.btn}>Pending</Button>
          <Button className={classes.btn}>Confirmed</Button>
          <Button className={classes.btn}>Canceled</Button>
          <Button className={classes.btn}>Shipped</Button>
        </Grid>
        <Grid item xs={12} lg={5}>
          <OrdersSearchBar />
        </Grid>
      </Grid>
    );
}