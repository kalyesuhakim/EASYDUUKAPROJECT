import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import SearchBar from "../../../../global/components/SearchBar/SearchBar";
import clsx from "clsx";
import {
  ArrowDownward,
  Filter,
  KeyboardArrowDown,
  MoreHoriz,
  MoreVert,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  btn: {
    color: blueGrey[500],
    height: "100%",
  },
  root: {
    borderBottom: `solid 1px ${blueGrey[500]}`,
    marginTop: "20px",
    boxShadow: theme.boxShadows[4],
  },
}));

export default function InventoryToolbar(props) {
  const classes = useStyles();
  return (
    <Grid container className={clsx(classes.root)}>
      <Grid item xs={12} lg={7}>
        <Button className={classes.btn}>All</Button>
        <Button className={classes.btn}>Deactivated</Button>
        <Button className={classes.btn}>Active</Button>
        <Button className={classes.btn} endIcon={<KeyboardArrowDown />}>
          More
        </Button>
      </Grid>
      <Grid item xs={12} lg={5}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}
