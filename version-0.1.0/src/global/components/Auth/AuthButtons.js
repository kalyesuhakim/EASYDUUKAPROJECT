import React from "react";
import {
  Button,
  makeStyles,
} from "@material-ui/core";
import { useState } from "react";
import { authService } from "../../store/services/authService";
import AuthComponent from "./AuthComponent";
import { AUTH_LOGOUT_USER } from "../../store/actions/authActionTypes";
import { reqService } from "../../store/services/reqService";
import { Link } from "react-router-dom";
import { mappedLinks } from "../../maps";

const useStyles = makeStyles((theme) => ({
  root: {},
  registerBtn: {
    marginLeft: theme.spacing(1),
  },
  menuRoot: {
    top: "60px",
    minWidth: "200px",
    ["& .MuiMenu-paper"]: {
      top: "150px!important",
      minWidth: "200px",
    },
  },
  menuHeader: {
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCard: {
    borderRadius: "20px",
    minHeight: "70vh",
    width: "100%",
  },
  dialogRoot: {
    "& .MuiDialog-paper": {
      borderRadius: "20px",
      padding: "20px",
      // background: 'rgba(255,255,255, 0.5)',
      ...theme.typography.body1,
    },
  },
}));

function AuthButtons(props) {
  const { auth, reqSubmitBtn, reqInput, getAuthStatus } = props;
  //console.log("The props are here and hope its fine \n\n", props);
  const classes = useStyles();
  const [state, setState] = useState({
    menuEl: null,
  });
  const openMenu = (e) => {
    setState({
      ...state,
      menuEl: e.target,
    });
  };
  const closeMenu = () => {
    setState({
      ...state,
      menuEl: null,
    });
  };

  reqInput({
    thread: AUTH_LOGOUT_USER,
    name: "token",
    defaultValue: auth.access_token,
  });

  return (
    <AuthComponent authenticated={<Button>Sign Out</Button>}>
      <Button component={Link} to={mappedLinks.auth.register.path}>Create Account</Button>
      <Button component={Link} to={mappedLinks.auth.login.path}>LogIn</Button>
    </AuthComponent>
  );
}

export default reqService(authService(AuthButtons));
