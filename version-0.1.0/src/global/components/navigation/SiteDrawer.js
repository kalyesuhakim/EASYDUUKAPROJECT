import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import {
  List,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Collapse
} from "@material-ui/core";
import {

  SortSharp as MenuIcon,
  CardTravelOutlined as JobsIcon,
  SupervisorAccountOutlined as HireIcon,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@material-ui/icons";

import { NavLink } from "react-router-dom";
import { mappedImages, mappedLinks } from "../../maps";


/**Classes  */
const useStyles = makeStyles(theme => ({
  fullList: {
    width: 250,
  },
  activepath: {
    color: theme.palette.primary.path
  },
}));

const drawerLinks = [
  {
    divider: "",
    text: "Home",
    path: mappedLinks.home.path,
    // icon: <JobsIcon />,
    protected: false,
  },
  {
    divider: "",
    text: "About",
    path: mappedLinks.about.path,
    // icon: <HireIcon />,
    protected: false,
  },
  {
    divider: "",
    text: "Pricing",
    path: mappedLinks.pricing.path,
    // icon: <HireIcon />,
    protected: false,
  },
  
];
export default function SiteDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    collapseServices: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const collapseMenu = (e) => {
    e.stopPropagation()
    setState({...state, collapseServices: !state.collapseServices})
  }

  const fullList = (side) => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={
              <mappedImages.Logo
                // src={images.app.logo}
                alt="hapipie.com"
                style={{ height: "50px", width: "auto" }}
              />
            }
          />
        </ListItem>
        {drawerLinks.map((item, index) => (
          <React.Fragment key={index}>
            {item.divider}
            <ListItem
              button
              activeClassName={classes.activeLink}
              component={NavLink}
              to={item.path}
              key={index}
            >
              <ListItemText primary={item.text} />
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
          </React.Fragment>
        ))}
        <ListItem button onClick={collapseMenu}>
          <ListItemText primary={"Services"} />
          <ListItemIcon>
            {state.collapseServices ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}
          </ListItemIcon>
        </ListItem>
        <div className="w-100 pl-2">
          <Collapse in={state.collapseServices}>
            <ListItem
              button
              activeClassName={classes.activeLink}
              component={NavLink}
              to={mappedLinks.services.tech.path}
            >
              <ListItemText primary={"Tech Services"} />
            </ListItem>
            <ListItem
              button
              activeClassName={classes.activeLink}
              component={NavLink}
              to={mappedLinks.services.marketing.path}
            >
              <ListItemText primary={"Digital Marketing"} />
            </ListItem>
            {/* <ListItem
              button
              activeClassName={classes.activeLink}
              component={NavLink}
              to={mappedLinks.services.media.path}
            >
              <ListItemText primary="Media Services" />
            </ListItem> */}
          </Collapse>
        </div>
        <Button
          fullWidth
          className="round-btn"
          component="a"
          variant="outlined"
          color="secondary"
          to="https://forms.gle/gkjrNuZxgYJkAioP8"
          href="https://forms.gle/gkjrNuZxgYJkAioP8"
        >
          Get Quote
        </Button>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {fullList("left")}
      </Drawer>
    </div>
  );
}
