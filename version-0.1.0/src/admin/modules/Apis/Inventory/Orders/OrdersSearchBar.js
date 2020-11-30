import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useState } from "react";
import { Backdrop } from "@material-ui/core";
import { useRef } from "react";
import { Close, Book, BookOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 10,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    // marginBottom: "20px",
    // backgroundColor: theme.palette.primary.main,
    // color: theme.palette.common.white,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    // color: theme.palette.common.white,
  },
  iconButton: {
    padding: 10,
    // color: theme.palette.common.white,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backdropFilter: "blur(5px)",
  },
}));

export default function OrdersSearchBar() {
  const classes = useStyles();
  const [state, setState] = useState({
    back_drop_styles: {
      height: "200px",
      width: "200px",
      backgroundColor: "white",
    },
    open_back_drop: false,
  });
  const onFocus = (e) => {
    setState({ ...state, open_back_drop: true });
    console.log(e.target);
  };
  

  return (
    <React.Fragment>
      <Paper square className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          onFocus={onFocus}
          className={classes.input}
          placeholder="Search Orders"
          inputProps={{ "aria-label": "Search Orders" }}
        />

        <Divider className={classes.divider} orientation="vertical" />
        <IconButton className={classes.iconButton} aria-label="directions">
          <Close />
        </IconButton>
      </Paper>
      {/* <div className="w-100 pb-3">
        <MicrosoftLoader />
      </div> */}
    </React.Fragment>
  );
}
