import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import clsx from "clsx";
import { blueGrey, grey } from "@material-ui/core/colors";
import { KeyboardArrowRight } from "@material-ui/icons";
import { color } from "@material-ui/system";
import propTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      textDecoration: "none!important",
      transition: "0.3s ease",
      color: grey[900],
      color: theme.palette.common.black,
      "&:hover": {
        letterSpacing: "1.2px",
        transition: "0.3s ease",
      },

      //   fontWeight: '300'
    },
  },
  small: {
    marginLeft: "10px",
    fontSize: "14px",
    "& .MuiSvgIcon-root": {
      // fontSize: '14px',
    },
    color: grey[800] + "!important",
  },
}));

export default function BreadCrumbNav(props) {
  const { path } = useLocation();
  const Root = props.root;
  const classes = useStyles();

  const location = useLocation();
  const match = useRouteMatch(location);
  console.log("The path is: ...", match);

  return (
    <React.Fragment>
      <div className={clsx("w-100 d-flex align-items-end mb-3", classes.root)}>
        <Typography
          component={NavLink}
          to={Root.path}
          variant="h6"
          className={clsx("d-flex align-items-center")}
        >
          {Root.icon}
          &nbsp; {Root.name}
        </Typography>
      </div>
    </React.Fragment>
  );
}


BreadCrumbNav.propTypes = {
  root: propTypes.any.isRequired,
}