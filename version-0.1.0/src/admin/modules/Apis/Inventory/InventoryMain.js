import {
  Button,
    Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import React from "react";
import clsx from "clsx";
import InventoryDashboard from "./InventoryDashboard";
import InventoryViews from "./InventoryViews";
import CreateInventory from "./CreateInventory";

const useStyles = makeStyles((theme) => ({
  inventoryCard: {
    height: "200px",
    boxShadow: theme.boxShadows[3],
    position: "relative",
  },
 
  
}));

export default function InventoryMain(props) {
  const classes = useStyles();
  return (
    <Grid container className="mt-3">
      <Grid item xs={12}>
        <div className="d-flex justify-content-end">
          <CreateInventory />
        </div>
      </Grid>
      <Grid item xs={12}>
        <InventoryDashboard />
      </Grid>
      <Grid item xs={12} lg={8}>
        <InventoryViews view="grid" />
      </Grid>
      <Grid item xs={12} lg={4}></Grid>
    </Grid>
  );
}
