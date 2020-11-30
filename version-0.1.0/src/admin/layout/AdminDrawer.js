import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
  ListItemSecondaryAction,
} from "@material-ui/core";

import {
  Dashboard,
  PersonPin,
  ShoppingBasket,
  ShoppingCart,
  AssignmentOutlined,
  LibraryBooksOutlined,
  AccountTreeOutlined,
  MailOutlineOutlined,
  ShoppingCartOutlined,
  PeopleOutlineOutlined,
  CategoryOutlined,
  StoreOutlined,
  Settings,
  Apps,
  Store,
  People,
  LocalLaundryService,
  Money,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@material-ui/icons";
import { NavLink, Link } from "react-router-dom";
import links from "../routes/adminLinks";
import { blueGrey, grey } from "@material-ui/core/colors";
import adminLinks from "../routes/adminLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: "solid 1px " + theme.palette.secondary.dark,
    height: "100vh",
    marginBottom: '100px',
  },
  brand: {
    // backgroundColor: theme.palette.secondary.path,
    // color: theme.palette.secondary.contrastText,
    height: "62px",
  },
  brandText: {
    // color: theme.palette.secondary.contrastText,
  },
  drawerLink: {
    color: theme.palette.secondary.dark,
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: grey[50],
      color: theme.palette.primary.main,
      transition: "0.3s ease",
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.secondary.dark,
    },
  },
  drawerSecondaryLink: {
    paddingLeft: "30px",
    color: blueGrey[600],
    transition: "0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "0.3s ease",
    },
  },
  activeLink: {
    backgroundColor: theme.palette.secondary.light,

    color: theme.palette.secondary.contrastText,
    borderRight: "solid 5px " + grey[200],
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    transition: "ease 0.3s",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      letterSpacing: "1px",
      color: theme.palette.secondary.contrastText,
      transition: "ease 0.3s",
    },

    "& .MuiListItemIcon-root": {
      color: theme.palette.secondary.contrastText,
    },
  },
}));

export default function AdminDrawer(props) {
  const classes = useStyles();
  const modules = [
    {
      name: "Dashboard",
      path: adminLinks.dashboard.path,
      icon: <Dashboard />,
    },
    {
      name: "Forms",
      path: adminLinks.forms.food_out_reach.path,
      icon: <Dashboard />,
    },

    {
      name: "Clients",
      path: adminLinks.clients.path,
      icon: <People />,
    },
    {
      ...adminLinks.billing,
    },
    {
      ...adminLinks.apis,
    },
    {
      name: "Settings",
      path: adminLinks.settings.path,
      icon: <Settings />,
    },
  ];

  /**
   * Collapse state to hold the collase change of every list item or module
   */
  const [collapseState, setCollapseState] = useState({
    // Set it as an empty object since the links will be activated on change
  });

  /**
   * On Collapse change
   * Once the link has been clicked it will handle the collapse of the modules
   */
  const onCollapseChange = (index) => () => {
    setCollapseState({ ...collapseState, [index]: !collapseState[index] });
  };

  return (
    <List
      className={classes.root}
      subheader={
        <ListItem className={classes.brand}>
          <ListItemText>
            <Typography variant="h6" className={classes.brandText}>
              ADMIN HAPIPIE
            </Typography>
          </ListItemText>
        </ListItem>
      }
      className={classes.root}
    >
      {/* <Divider /> */}
      {modules.map((module, index) => (
        <React.Fragment>
          <ListItem
            key={index}
            exact
            activeClassName={classes.activeLink}
            className={classes.drawerLink}
            to={module.path}
            component={NavLink}
            onClick={onCollapseChange(index)}
          >
            <ListItemIcon>{module.icon}</ListItemIcon>
            <ListItemText>{module.name}</ListItemText>
            {"subModules" in module ? (
              <ListItemSecondaryAction onClick={onCollapseChange(index)}>
                {collapseState[index] ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </ListItemSecondaryAction>
            ) : (
              ""
            )}
          </ListItem>
          {"subModules" in module
            ? module["subModules"].map((subModule, subIndex) => (
                <Collapse in={collapseState[index]}>
                  <ListItem
                    key={subIndex}
                    exact
                    activeClassName={classes.activeLink}
                    className={classes.drawerSecondaryLink}
                    to={subModule.path}
                    component={NavLink}
                    onClick={onCollapseChange(JSON.stringify(subModule))}
                  >
                    <ListItemIcon>{subModule.icon}</ListItemIcon>
                    <ListItemText>{subModule.name}</ListItemText>
                    {"subModules" in subModule ? (
                      <ListItemSecondaryAction
                        onClick={onCollapseChange(JSON.stringify(subModule))}
                      >
                        {collapseState[JSON.stringify(subModule)] ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </ListItemSecondaryAction>
                    ) : (
                      ""
                    )}
                  </ListItem>
                  {"subModules" in subModule
                    ? subModule["subModules"].map((subModule3, subIndex) => (
                        <Collapse in={collapseState[JSON.stringify(subModule)]}>
                          <ListItem
                            key={subIndex}
                            exact
                            activeClassName={classes.activeLink}
                            className={classes.drawerSecondaryLink}
                            to={subModule3.path}
                            component={NavLink}
                          >
                            <ListItemIcon>{subModule3.icon}</ListItemIcon>
                            <ListItemText>{subModule3.name}</ListItemText>
                          </ListItem>
                        </Collapse>
                      ))
                    : ""}
                </Collapse>
              ))
            : ""}
        </React.Fragment>
      ))}
    </List>
  );
}
