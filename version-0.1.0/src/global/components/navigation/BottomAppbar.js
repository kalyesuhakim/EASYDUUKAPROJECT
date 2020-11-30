import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  Hidden,
  BottomNavigationAction,
} from "@material-ui/core";
import {
  HomeOutlined,
  LibraryBooksOutlined,
  AssignmentOutlined,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import appLinks from "../../routes/appLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "0px",
    left: "0px",
    bottom: "0px",
    zIndex: theme.zIndex.appBar,
    borderTop: `solid 1px ${theme.palette.primary.path}`,
    
    background: "rgba(238, 238, 238, 0.933)",
    // background: "rgba(0, 0, 0, 0.333)",
    backdropFilter: "blur(10px)",
  },
  activepath: {
    backgroundColor: theme.palette.secondary.path,
    color: theme.palette.secondary.contrastText,
    borderRadius: "0px",
  },
}));

export default function BottomAppbar() {
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <BottomNavigation
        margin="dense"
        showLabels
        color="secondary"
        className={classes.root + " bottom-navbar"}
      >
        <BottomNavigationAction
        activeClassName="bottom-links-a-c"
        
          exact
          component={NavLink}
          to={appLinks}
          label="Home"
          icon={<HomeOutlined color="inherit" />}
        />
        <BottomNavigationAction
        activeClassName="bottom-links-a-c"
        color="inherit"
          component={NavLink}
          to={appLinks}
          label="Blog"
          icon={<AssignmentOutlined color="inherit" />}
        />
        <BottomNavigationAction
        activeClassName="bottom-links-a-c"

          component={NavLink}
          to={appLinks}
          label="Research"
          icon={<LibraryBooksOutlined color="inherit" />}
        />
        <BottomNavigationAction
        activeClassName="bottom-links-a-c"
        
          component={NavLink}
          to={appLinks}
          label="Store"
          // icon={
          //   <ShopCartBadge />
          // }
        />
      </BottomNavigation>
    </Hidden>
  );
}
