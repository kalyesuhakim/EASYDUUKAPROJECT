import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '30px',
        minHeight: '50px',
        '&*': {
            color: theme.palette.secondary.path,
        }
    },
    heading: {
        fontWeight: 300,
        '&*': {
            fontWeight: "200!important",
        }
    },
    secondaryTabs: {
        borderBottom: `${theme.palette.primary.path} 1px solid`,
        width: '100%',
        minHeight: '44px',
    },
    tabsList: {
        listStyle: 'none',
        display: 'inline',
        padding: '0px',
        margin: '0px',

        '& li': {
            display: 'inline',
            paddingRight: '15px'
        },
        "& :link": {
            textDecoration: 'none',
        }
    },
    activeTab: {
        borderBottom: `${theme.palette.primary.path} solid 2px`,
        paddingBottom: '20px',
    }
}));

export default function AccountNav(props) {
  const classes = useStyles();
  const tabs = props.secondaryTabs || [];
  return (
    <div className={classes.root}>
      <nav className={"d-flex justify-content-between align-items-center mb-4 "}>
        <div>
          <Typography className={classes.heading} variant="h5">
            {props.children}
          </Typography>
        </div>
        <div>
          <Typography className={classes.heading} variant="h5">
            Credit $1000.00
          </Typography>
        </div>
      </nav>
      <nav className={classes.secondaryTabs}>
        <ul className={classes.tabsList}>
          {tabs.map((tab) => (
            <li>
              <NavLink activeClassName={classes.activeTab} to={tab.path}>{tab.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
