import React from "react";
import {
  Grid,
  GridList,
  Paper,
  IconButton,
  makeStyles,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import {
  MoreHoriz,
  MoreVert,
  People,
  ViewArray,
  ViewList,
} from "@material-ui/icons";
import SearchBar from "../../../global/components/SearchBar/SearchBar";
import clsx from "clsx";
import DataTable from "../../../global/components/charts/DataTable";
import { useQuery } from "@apollo/client";
import NewFoodOutReach from "./NewFoodOutReach";
import { NavLink, Route } from "react-router-dom";
import adminLinks from "../../routes/adminLinks";
import Projects from "./Projects";
import FamilySurveys from "./FamilySurveys";
import CreateProject from "./CreateProject";
import NewSurvey from "./NewSurvey";

const useStyles = makeStyles((theme) => ({
  card: {
    // padding: "20px",
    boxShadow: theme.boxShadows[2],
  },
  tablePlanBtn: {
    width: "100%",
    height: "30px",
    borderColor: "solid 1px green",
    display: "flex",
  },
  plan: {
    width: "60%",
    height: "100%",
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

export default function FoodOutreachMain(props) {
  const classes = useStyles();
  const data = [
    {
      avatar: "",
      name: "Test User",
      email: "test@testaccount.com",
      phone: "+256 704324970",
    },
    {
      avatar: "",
      name: "Gatunye Lucky",
      email: "phafixp@gmail.com",
    },
  ];
  const columns = [
    {
      field: "avatar",
      title: "Avatar",
      render: (props) => <Avatar {...props}></Avatar>,
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
      field: "phone",
      title: "Phone",
    },
    {
      field: "subscription_plan",
      title: "Subscription Plan",
      render: (props) => (
        <div {...props} className={clsx(classes.tablePlanBtn)}>
          <div className={clsx(classes.plan)}>Basic</div>
          <div className={classes.planState}>Active</div>
        </div>
      ),
    },
    {
      field: "action",
      title: "Action",
      render: (props) => (
        <div style={{ color: "green" }} {...props}>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </div>
      ),
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={clsx("w-100 d-flex justify-content-between")}>
          <Typography
            variant="h6"
            className={clsx("d-flex align-items-center")}
          >
            <People />
            &nbsp; Projects
          </Typography>
          <div>
            <CreateProject />
            <NewSurvey />
            <NewFoodOutReach check="This is the check message" />
          </div>
        </div>
        <Paper
          elevation={0}
          className={clsx(classes.card, "mt-2", classes.tabs)}
        >
          <Button
            component={NavLink}
            exact
            activeClassName={classes.activeTab}
            to={adminLinks.forms.projects.path}
            className={classes.tab}
          >
            All Projects
          </Button>
          <Button
            component={NavLink}
            activeClassName={classes.activeTab}
            to={adminLinks.forms.surveys.path}
            className={classes.tab}
          >
            Surveys
          </Button>
          <Button
            component={NavLink}
            activeClassName={classes.activeTab}
            to={adminLinks.forms.family_surveys.path}
            className={classes.tab}
          >
            Family Surveys
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} className="mt-3">
        <Route
          path={adminLinks.forms.projects.path}
          render={(props) => <Projects {...props} />}
        />
        <Route
          path={adminLinks.forms.family_surveys.path}
          render={(props) => <FamilySurveys {...props} />}
        />
      </Grid>
    </Grid>
  );
}
