import React from "react";
import { IconButton, Menu, MenuItem, makeStyles } from "@material-ui/core";
import {
  Share,
  ShareOutlined,
  Facebook,
  Twitter,
  WhatsApp,
  Mail,
} from "@material-ui/icons";
import { useState } from "react";
import { blue, green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  menu: {
    top: "55px!important",
  },
}));
/**
 * Sharing Component for social sharing and media sharing and so on.
 */
export default function KijjeShare(props) {
  const classes = useStyles();

  const variant = props.variant || "outlined";

  const [state, setState] = useState({
    anchorEl: null,
  });

  const openMenu = (e) => {
    setState({ ...state, anchorEl: e.target });
  };

  const closeMenu = () => {
    setState({ ...state, anchorEl: null });
  };

  function shareOnFacebook() {
    var url =
      "https://www.facebook.com/sharer/sharer.php?u=https://yoururl.com&t=your message";
    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"
    );
    return false;
  }

  function shareOntwitter() {
    var TwitterWindow = null;
    var url =
      "https://twitter.com/intent/tweet?url=URL_HERE&via=getboldify&text=yourtext";
    TwitterWindow = window.open(
      url,
      "TwitterWindow",
      (/*width = */600),
      (/*height = */300)
    );
    return false;
  }

  function shareOnGoogle() {
    var url = "https://plus.google.com/share?url=https://yoururl.com";
    window.open(
      url,
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480"
    );
    return false;
  }

  return (
    <React.Fragment>
      <IconButton onClick={openMenu}>
        {variant === "outlined" ? <ShareOutlined /> : <Share />}
      </IconButton>
      <Menu
        className={classes.menu}
        open={Boolean(state.anchorEl)}
        anchorEl={state.anchorEl}
        onClose={closeMenu}
      >
        <MenuItem
          style={{ color: blue[500] }}
          onClick={() => {
            shareOntwitter();
            return closeMenu();
          }}
        >
          <Twitter color="inherit" /> &nbsp; Twitter
        </MenuItem>
        <MenuItem
          style={{ color: blue[800] }}
          onClick={() => {
            shareOnFacebook();
            return closeMenu();
          }}
        >
          <Facebook /> &nbsp; Facebook
        </MenuItem>
        <MenuItem style={{ color: green[500] }} onClick={closeMenu}>
          <WhatsApp /> &nbsp; WhatsApp
        </MenuItem>
        <MenuItem style={{ color: red[500] }} onClick={closeMenu}>
          <Mail /> &nbsp; Mail
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
