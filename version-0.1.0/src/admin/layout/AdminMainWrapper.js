import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  makeStyles,
  useTheme,
  CssBaseline,
  Drawer,
  Hidden,
  IconButton,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { blueGrey, grey, yellow } from "@material-ui/core/colors";
import clsx from 'clsx';
import { Close } from "@material-ui/icons";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import { maxWidth } from "@material-ui/system";

const drawerWidth = 240;
const appBarHeight = 65;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    top: appBarHeight + "px!important",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    // boxShadow:
    // "1px 2px 1px -1px rgba(0,0,0,-2.8), 0px -1px 1px 0px rgba(0,0,0,-0.96), 0px 3px 15px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    // background: theme.palette.common.white,
    borderBottom: "solid 1px black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  activePage: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.9rem",
    },
  },
  // necessary for main to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: grey[50],

    marginTop: appBarHeight + "px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
    },
  },
  main: {
    position: "relative",
    flexGrow: 1,
    background: grey[50],
    minHeight: "100vh",
    "& .content": {
      padding: theme.spacing(3),
    },
  },
  tabs: {
    width: "100%",
    display: "flex",
    position: "sticky",
    top: "65px",
    background: grey[50],
    zIndex: theme.zIndex.appBar,
    boxShadow: theme.boxShadows[2],
  },
  tab: {
    textDecoration: "none",
    color: blueGrey[500],
    cursor: "pointer",
    background: grey[300],
    width: "auto",
    minWidth: "150px",
    maxWidth: "150px",
    padding: "5px",
    display: "inline",
    display: "flex",
    justifyContent: "space-between",
    borderBottomRightRadius: "10px",
    "&.active": {
      borderBottomRightRadius: "10px",
      borderBottomLeftRadius: "10px",
      background: "inherit",
      fontWeight: "bold",
      color: theme.palette.primary.main,
    },
    "&.small": {
      minWidth: "auto",
      maxWidth: "auto",
    },
  },
}));



function AdminMainWrapper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {pathname} = useLocation();
  const {isExact, path} = useRouteMatch(pathname);
  console.log("is exact is: ", isExact, path);
  const [tabbedRoutes, setTabbedRoutes] = useState({
  
  })

  useEffect(() => {
     console.log("pathname: ", pathname.split("/")[1]);
     var savedPath = pathname.split("/");
     savedPath = savedPath[savedPath.length - 1];
     if(savedPath === ""){
       savedPath = "Dashboard"
     }
     savedPath = savedPath[0].toUpperCase() + savedPath.slice(1, savedPath.length);
    if(!tabbedRoutes[pathname]){
      setTabbedRoutes({...tabbedRoutes, [pathname]: {
        name: savedPath,
      }})
    }
  })
  const [mobileOpen, setMobileOpen] = React.useState(false);
  document.body.style = "background-color: #fff";
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Close a certain tab
   */
  const closeTab = (tabIndex) => (e) => {
    e.preventDefault();
    var _tabs = Object.assign({}, tabbedRoutes);
    console.log("We are here");
    console.log("Old tabs", tabbedRoutes);
    delete _tabs[tabIndex];
    console.log("New tabs", _tabs);
    setTabbedRoutes({..._tabs});
    // e.stopPropagation();
    

  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={0}
        color="default"
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.activePage} color="primary">
            <b>DASHBOARD</b>
          </Typography>
          {props.appbar}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Navigation Bar">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Paper variant="elevation" elevation={5}>
            <Drawer
              elevation={3}
              // container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {props.drawer}
            </Drawer>
          </Paper>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Paper variant="elevation" elevation={5}>
            <Drawer
              elevation={3}
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {props.drawer}
            </Drawer>
          </Paper>
        </Hidden>
      </nav>
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <div className={clsx(classes.tabs)}>
          {Object.keys(tabbedRoutes).map((key, index) => {
            const tab = tabbedRoutes[key];
            var tabSize = "normal";
            if (Object.keys(tabbedRoutes).length > 4) {
              tabSize = "small";
            }
            return (
              <NavLink
                to={key}
                className={clsx(classes.tab, path !== key ? tabSize : "")}
                exact
                activeClassName="active"
              >
                <Typography noWrap className={tabSize}>
                  <small>{tab.name}</small>
                </Typography>
                <IconButton size="small" onClick={closeTab(key)}>
                  <Close
                    fontSize="10px"
                    style={{ width: "17px", height: "17px" }}
                  />
                </IconButton>
              </NavLink>
            );
          })}
        </div>
        <div className={clsx("content")}>
          {props.children}
        </div>
      </main>
    </div>
  );
}

AdminMainWrapper.propTypes = {
  appbar: PropTypes.any.isRequired,
  drawer: PropTypes.any.isRequired,
}

export default AdminMainWrapper;
