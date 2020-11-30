/**
 * Inventory View Lists
 * Theses are the lists needed in order to view all inventories
 */
import React from "react";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { ArrowForward, BallotOutlined, People } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import InventoryToolbar from "./InventoryToolbar";
import ApiRequest from "../../../../api/ApiRequest";
import { INVENTORY_GET_INVENTORIES } from "../../../../api/apiThreads";

const useStyles = makeStyles((theme) => ({
  gridCard: {
    height: "200px",
    boxShadow: theme.boxShadows[3],
    padding: theme.spacing(3),
  },
}));

const InventoryGridView = (props) => {
  const classes = useStyles();
  const data = props.data || [];
  if (data.length < 1) {
    return <Typography>No inventories created yet</Typography>;
  }
  return (
    <Grid container className="mt-5">
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={classes.gridCard}>
          <Typography variant="h5">Inventory Name</Typography>
          <Typography>Inventory Owner</Typography>
          <Typography>Inventory Status</Typography>
          <Typography>Billing Status</Typography>
          <Typography>Usage: 20/30 days</Typography>
          <Button>Manage</Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

const InventoryListView = (props) => {
  const data = props.data || [];
  return (
    <List>
      {data.map(({ name, usage, billingStatus }, index) => (
        <ListItem key={index}>
          <ListItemAvatar>
            <BallotOutlined />
          </ListItemAvatar>
          <ListItemText secondary="Inventory Id">{name}</ListItemText>
          <ListItemSecondaryAction>
            {/* <Typography>Billing Status Pending...</Typography> */}
            {/* <Typography>Usage: 10/50</Typography> */}
            <Button endIcon={<ArrowForward />}>
              Manage 
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

const InventoryViews = (props) => {
  let view = props.view || "";
  switch (view.toUpperCase()) {
    case "GRID":
      return <InventoryGridView data={props.data} />;
    default:
      return <InventoryListView data={props.data} />;
  }
};

const InventoryViewWrapper = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <InventoryToolbar />
        <ApiRequest
          autoload={true}
          initialData={[]}
          thread={INVENTORY_GET_INVENTORIES}
        >
          {({ data, loading, error }) => {
            if (loading) {
              return <CircularProgress />;
            }
            return <InventoryViews data={data} />;
          }}
        </ApiRequest>
      </Grid>
    </Grid>
  );
};

export default InventoryViewWrapper;
