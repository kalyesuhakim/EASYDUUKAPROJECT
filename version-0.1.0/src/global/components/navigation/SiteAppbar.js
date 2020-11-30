import React, { useState } from "react";
import {
  Hidden,
  // Container,
  Grid,
  // Toolbar,
  Button,
  // Badge,
  Typography,
  // Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Link,
} from "@material-ui/core";

/** Styles */
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
import {
  KeyboardArrowDown,
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  Instagram,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import SiteDrawer from "./SiteDrawer";
import AuthButtons from "../Auth/AuthButtons";
import { mappedImages as MappedImages, mappedLinks } from "../../maps";

/**Coustom styles */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px",
    margin: "0px",
    position: "fixed",
    left: "0px",
    right: "0px",
    zIndex: theme.zIndex.appBar + 1,
    backgroundColor: theme.palette.primary.contrastText,
  },
  rootWithShadow: {
    padding: "0px",
    margin: "0px",
    position: "fixed",
    left: "0px",
    right: "0px",
    zIndex: theme.zIndex.appBar + 1,
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: theme.boxShadows[3],
    transition: "0.3 ease",
  },
  innerHeight: {
    position: "relative",
    width: "100%",
  },
  topBarRoot: {
    minHeight: "64px",
    width: "100%",

    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    "& *": {
      color: theme.palette.secondary.contrastText,
    },
  },

  nav: {
    padding: "0px",
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "100%",
    minHeight: "84px",
    // position: 'relative',
    boxShadow: theme.boxShadows[2],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbar: {
    marginTop: theme.mixins.toolbar.height,
  },
  brandLogo: {
    height: "40px",
    width: "auto",
  },
  mappedLinks: {
    color: theme.palette.primary.main,
    fontWeight: "300",
  },
  appBarNavLinks: {
    justifyContent: "center",
  },
  brand: {
    color: theme.palette.primary.main,
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: "25px",
  },
  navLinks: {
    padding: "0px",
    margin: "0px",
    display: "inline",
    listStyle: "none",
    "& :link": {
      textDecoration: "none",
    },
    "& li": {
      display: "inline",
      paddingRight: "20px",
    },
    "& *": {
      fontWeight: 300,
      letterSpacing: 1.5,
    },
  },
  navHeight: {
    height: "64px",
  },
  bgDark: {
    backgroundColor: "red",
  },
  main: {
    cursor: "pointer",
  },
  /**
   *  Phone Layout and styles
   */

  phnNav: {
    width: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
  },
  brandLogo: {
    ...theme.typography.h6,
    color: theme.palette.secondary.main,
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  avatar: {
    width: "30px",
    height: "30px",
  },
  logo: {
    height: "50px",
    width: "auto",
  },
  logoSmall: {
    height: "40px",
    width: "auto",
  },
  nav: {
    paddingTop: "20px",
    paddingBottom: "20px",
    display: "flex",
    justify: "space-between",
    alignItems: "center",
  },
  navLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    paddingRight: "20px",
    fontSize: "18px",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    "&:hover": {
      textDecoration: "none",
      transition: "0.3 ease",
      fontWeight: 400,
      color: theme.palette.secondary.light,
      opacity: 0.6,
    },
  },
  activeLogo: {
    color: theme.palette.secondary.main,
  },
  logoLogo: {
    cursor: "pointer",
  },
  menuRoot: {
    top: "60px!important",
  },
}));

function SocialLinks(props) {
  return (
    <div>
      <IconButton
        component="a"
        href="https://www.facebook.com/Hapipie-Limited-103289108174877/"
        target="facebook"
      >
        <Facebook />
      </IconButton>
      <IconButton
        component="a"
        href="https://twitter.com/Hapipie1"
        target="twitter"
      >
        <Twitter />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.instagram.com/hapipie_limited/"
        target="instagram"
      >
        <Instagram />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.pathedin.com/company/hapipie"
        target="linkedin"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        component="a"
        href="https://wa.me/message/NIKJWB2V6N7LP1"
        target="whatsapp"
      >
        <WhatsApp />
      </IconButton>
      {/* <AuthButtons /> */}
    </div>
  );
}

function SiteAppbar(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    servicesMenu: false,
    showAppbarShadow: false,
  });

  const openServicesMenu = (e) =>
    setState({ ...state, ["servicesMenu"]: e.target });
  const closeServiceMenu = (e) =>
    setState({ ...state, ["servicesMenu"]: false });

  document.onscroll = () => {
    if (window.scrollY > 100) {
      if (state.showAppbarShadow === false) {
        setState({ ...state, showAppbarShadow: true });
      }
    }

    if (window.scrollY < 100) {
      if (state.showAppbarShadow === true) {
        setState({ ...state, showAppbarShadow: false });
      }
    }
  };
  return (
    <header
      className={
        state.showAppbarShadow
          ? classes.rootWithShadow + " animated slideOutUp"
          : classes.root + " animated slideInDown"
      }
    >
      <div className={classes.innerWrapper}>
        <Hidden smDown>
          <Grid
            className={classes.nav}
            container
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={10}>
              <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={3}
              >
                <Grid
                  item
                  className={classes.logoLink}
                  component={NavLink}
                  to={mappedLinks.home.path}
                >
                  <MappedImages.Logo className={classes.logo} />
                </Grid>
                <Grid item>
                  <SocialLinks />
                  <nav className={classes.nav}>
                    <Link
                      exact
                      component={NavLink}
                      to={mappedLinks.home.path}
                      className={classes.navLink}
                      activeClassName={classes.activeLink}
                    >
                      Home
                    </Link>
                    <Link
                      component={NavLink}
                      to={mappedLinks.about.path}
                      className={classes.navLink}
                      activeClassName={classes.activeLink}
                    >
                      About
                    </Link>
                    <Link
                      component={NavLink}
                      onMouseOver={openServicesMenu}
                      onClick={openServicesMenu}
                      to={mappedLinks.services.path}
                      className={classes.navLink}
                      activeClassName={classes.activeLink}
                    >
                      <div
                        className={
                          classes.servicesMenuRoot +
                          " d-flex align-items-center justify-content-between"
                        }
                      >
                        Services
                        <KeyboardArrowDown />
                      </div>
                    </Link>
                    <Menu
                      anchorEl={state.servicesMenu}
                      open={Boolean(state.servicesMenu)}
                      onClose={closeServiceMenu}
                      className={classes.menuRoot}
                      // onMouseOut={closeServiceMenu}
                    >
                      <MenuItem
                        className={classes.navLink}
                        activeClassName={classes.activeLink}
                        to={mappedLinks.services.tech.path}
                        component={NavLink}
                        onClick={closeServiceMenu}
                      >
                        Tech Services
                      </MenuItem>
                      <MenuItem
                        onClick={closeServiceMenu}
                        className={classes.navLink}
                        activeClassName={classes.activeLink}
                        to={mappedLinks.services.marketing.path}
                        component={NavLink}
                      >
                        Digital Marketing Services
                      </MenuItem>
                    </Menu>
                    <Link
                      to={mappedLinks.pricing.path}
                      className={classes.navLink}
                      component={NavLink}
                      activeClassName={classes.activeLink}
                    >
                      Pricing
                    </Link>
                    <Button
                      className="round-btn"
                      component="a"
                      variant="outlined"
                      color="primary"
                      to="https://forms.gle/gkjrNuZxgYJkAioP8"
                      href="https://forms.gle/gkjrNuZxgYJkAioP8"
                    >
                      Get Quote
                    </Button>
                  </nav>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <div className="d-flex justify-content-center">
            <SocialLinks />
          </div>
          <PhoneNav />
        </Hidden>
      </div>
    </header>
  );
}

function PhoneNav(props) {
  const classes = useStyles();
  return (
    <Paper elevation={0} square className={classes.phnNav} variant="outlined">
      <Grid container spacing={2} justify="space-between" alignItems="center">
        <Grid
          item
          className={classes.logoLink}
          component={NavLink}
          to={mappedLinks.home.path}
        >
          <div className="d-flex align-items-center ml-3">
            <MappedImages.Logo className={classes.logoSmall} />
          </div>
        </Grid>
        <Grid item>
          <Button
            className="round-btn"
            component="a"
            variant="outlined"
            color="secondary"
            to="https://forms.gle/gkjrNuZxgYJkAioP8"
            href="https://forms.gle/gkjrNuZxgYJkAioP8"
          >
            Get Quote
          </Button>
        </Grid>
        <Grid item>
          <SiteDrawer />
        </Grid>
      </Grid>
    </Paper>
  );
}
export default SiteAppbar;
