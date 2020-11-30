import React from "react";
import { makeStyles, Grid, IconButton } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Edit, Add } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "500px",
    height: "500px",
    background: grey[50]
  },
}));
export default function LuckyBuilder() {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
        <Grid xs={8}>
            <div></div>
        </Grid>
        <Grid xs={4}>
        <IconButton>
            <Edit />
        </IconButton>
        <IconButton>
            <Add />
        </IconButton>
        </Grid>
    </Grid>
  );
}
