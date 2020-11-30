import React, { useState } from "react";
import { loader } from "graphql.macro";
import {
  Grid,
  GridList,
  Paper,
  IconButton,
  makeStyles,
  Button,
  Typography,
  Avatar,
  useTheme,
  Menu,
  MenuItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  ListItem,
} from "@material-ui/core";

import {
  MoreHoriz,
  MoreVert,
  People,
  StraightenSharp,
  ViewArray,
  ViewList,
} from "@material-ui/icons";
import SearchBar from "../../../global/components/SearchBar/SearchBar";
import clsx from "clsx";
import DataTable from "../../../global/components/charts/DataTable";
import { Query } from "react-apollo";

import RegisterClient from "./ClientsRegisterClient";
import { NavLink } from "react-router-dom";
import adminLinks from "../../routes/adminLinks";
import store from "../../../global/store";
import QueryReq from "../../../global/store/graphql/QueryReq";
import { GET_ALL_CLIENTS_THREAD } from "../../../graphql/threads";

// const CLIENTS_QUERY = loader("./queries/clients.gql");

const useStyles = makeStyles((theme) => ({
  card: {
    // padding: "20px",
    boxShadow: theme.boxShadows[2],
  },
  tablePlanBtn: {
    width: "100%",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  plan: {
    width: "60%",
    // height: "100%",
    padding: "5px 10px",
  },
  planState: {
    padding: "5px 10px",
    background: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark,
  },
  tabs: {
    height: "50px",
  },
  tab: {
    height: "100%",
  },
  activeTab: {
    borderBottom: "solid 2px " + theme.palette.primary.path,
    color: theme.palette.primary.path,
  },
}));

/**
 * Action Menu button for the clients table
 */
const ActionMenu = (props) => {
  const [actionMenuState, setActionMenuState] = useState({
    anchorEl: false,
  });
  const openActionMenu = (e) => {
    setActionMenuState({ ...actionMenuState, anchorEl: e.target });
  };
  const closeActionMenu = () => {
    setActionMenuState({ ...actionMenuState, anchorEl: false });
  };

  return (
    <div style={{ color: "green" }} {...props}>
      <IconButton onClick={openActionMenu}>
        <MoreHoriz />
      </IconButton>
      <Menu
        anchorEl={actionMenuState.anchorEl}
        open={Boolean(actionMenuState.anchorEl)}
        onClose={closeActionMenu}
      >
        <ListItem>
          <ListItemText >Disable Account</ListItemText>
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>View Profile</ListItemText>
          <ListItemSecondaryAction>
            <StraightenSharp />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>Manage Account</ListItemText>
          <ListItemSecondaryAction>
            <Switch />
          </ListItemSecondaryAction>
        </ListItem>
      </Menu>
    </div>
  );
};
function ClientsQueryHook() {
  const theme = useTheme();
  // const { loading, error, data } = useQuery(CLIENTS_QUERY, {
  //   variables: { fetchAll: true },
  // });

  const {loading, error, data} = false;

  const classes = useStyles();

  const columns = [
    {
      field: "avatar",
      title: "Avatar",
      render: (props) => <Avatar size="small" {...props}></Avatar>,
    },
    {
      field: "name",
      title: "Name",
    },
    {
      field: "email",
      title: "Email",
    },

    {
      field: "package",
      title: "Package",
      render: (props) => (
        <div {...props} className={clsx(classes.tablePlanBtn)}>
          <div
            className={clsx(classes.plan)}
            style={{
              border: `solid 1px ${theme.palette.primary.dark}`,
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.primary.contrastText,
            }}
          >
            Basic
          </div>
          <div
            className={classes.planState}
            style={{ border: `solid 1px ${theme.palette.primary.dark}` }}
          >
            Active
          </div>
        </div>
      ),
    },
    {
      field: "action",
      title: "Action",
      render: (props) => <ActionMenu {...props} />,
    },
  ];


  return (
    <div>
      <Button onClick={() => {
        store.dispatch({
          type: "TEST_TYPE",
          data: "There is something that will work here"
        })
      }}>
        Test Graph
      </Button>
      <QueryReq thread={GET_ALL_CLIENTS_THREAD} variables={{
        fetchAll: true
      }}>
        {({loading, error}) => {

          console.log("\n\n\nLoading....  %s \n\n\n", loading);
          if(error === true){
          }
          return (
            <div>
              <DataTable loading={true} title="" columns={columns} data={[]} />
            </div>
          );
        }}
      </QueryReq>
    </div>
  );
}

/**
 * Root Component
 */
function ClientsMain(props) {
  const classes = useStyles();
  console.log("\n\nClients main props: \n", props, "\n\n");

  return (
    <Grid container>
      <Grid item xs={12}>
      <Button onClick={() => {
        console.clear();
        console.log(props.dispatch({
          type: 'TEST_ACTION',
        }));
      }}>
        Some Demo Click
      </Button>
        <div className={clsx("w-100 d-flex justify-content-between")}>
          <Typography
            variant="h6"
            className={clsx("d-flex align-items-center")}
          >
            <People />
            &nbsp; Clients
          </Typography>
          <RegisterClient check="This is the check message" />
        </div>
        {/* <Paper
          elevation={0}
          className={clsx(classes.card, "mt-2", classes.tabs)}
        >
          <Button
            component={NavLink}
            exact
            activeClassName={classes.activeTab}
            to={adminLinks.clients.path}
            className={classes.tab}
          >
            All Accounts
          </Button>
          <Button
            component={NavLink}
            activeClassName={classes.activeTab}
            to={adminLinks.clients.subscribers.path}
            className={classes.tab}
          >
            Subscribers
          </Button>
          <Button
            component={NavLink}
            activeClassName={classes.activeTab}
            to={adminLinks.clients.inactiveAccounts.path}
            className={classes.tab}
          >
            Inactive Accounts
          </Button>
        </Paper>
      */}
      </Grid>

      <Grid item xs={12} className="mt-3">

        <ClientsQueryHook />
      </Grid>
    </Grid>
  );
}

export default ClientsMain;