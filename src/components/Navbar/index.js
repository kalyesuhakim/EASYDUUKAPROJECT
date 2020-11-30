import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FormControl, Input, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: "100px",
    marginRight: "100px",
    fontWeight: "700"
  },
  link:{
    textDecoration: "none",
    color: "orange",
    fontWeight: "900"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/" className={classes.link}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/category" className={classes.link}>Categories</Link></MenuItem>
      </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            EASYDUUKA
          </Typography>
          <FormControl fullWidth className={classes.margin}>
          <Input
            id="standard-adornment-amount"
            placeholder="Search product......"
            // onChange={handleChange('amount')}
          />
        </FormControl>
        <Link to="/cart" className={classes.link}>
            <Button color="inherit">
                CART
                <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
                </StyledBadge>
                </IconButton>
            </Button>
        </Link>
         </Toolbar>
      </AppBar>
    </div>
  );
}
