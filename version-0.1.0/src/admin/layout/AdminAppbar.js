import React from "react";
import {
  Paper,
  makeStyles,
  Grid,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Hidden,
  Button,
  Badge,
} from "@material-ui/core";
import {
  Person,
  Notifications,
  PersonOutlineOutlined,
  Message,
  MessageOutlined,
  NotificationsOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  brand: {
    fontWeight: 500,
    textTransfrom: "uppercase",
  },
  myAccountBtn: {
    borderRadius: "20px!important",
  },
  myAccountItem: {
    minWidth: '150px',

  }
}));
export default function (props) {
  
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container alignItems="center" justify="space-between">
      <Grid item></Grid>
      <Grid item>    

        <Hidden smUp>
          <IconButton onClick={handleClick}>
            <PersonOutlineOutlined />
          </IconButton>
        </Hidden>
        <Hidden xsDown>
          <Button
            onClick={handleClick}
            variant="outlined"
            color="secondary"
            className={classes.myAccountBtn}
            endIcon={<PersonOutlineOutlined />}
          >
            Gatunye
          </Button>
        </Hidden>
        <Menu
          className={classes.myAccountMenu}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={classes.myAccountItem} onClick={handleClose}>Profile</MenuItem>
          <MenuItem className={classes.myAccountItem} onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Grid>
  </Grid>
  );
}
