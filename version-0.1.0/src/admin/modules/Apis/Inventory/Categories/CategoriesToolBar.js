import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import SearchBar from '../../../../../global/components/SearchBar/SearchBar';
import clsx from 'clsx'
import { Filter, MoreHoriz, MoreVert } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    btn: {
        color: blueGrey[500],
    },
    root: {
        borderBottom: `solid 1px ${blueGrey[500]}`,
        marginTop: "20px",
        boxShadow: theme.boxShadows[4]
    }
}));

export default function CategoriesToolbar(props){
    const classes = useStyles();
    return (
      <Grid container className={clsx(classes.root)}>
        <Grid item xs={12} lg={7}>
          <Button className={classes.btn}>All</Button>
          <Button className={classes.btn}>Parent Categories</Button>
          <Button className={classes.btn}>Sub Categories</Button>
          <Button className={classes.btn} endIcon={<Filter /> }>Display</Button>
        </Grid>
        <Grid item xs={12} lg={5}>
          <SearchBar />
        </Grid>
      </Grid>
    );
}