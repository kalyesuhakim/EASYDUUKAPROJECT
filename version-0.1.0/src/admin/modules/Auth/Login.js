import { Grid, Paper, makeStyles, Typography, Button } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import { ArrowForward, Lock, MailOutline } from "@material-ui/icons";
import React from "react";
import { KijjeInput } from "../../../global/components/inputs/Inputs";
import { reqService } from "../../../global/store/services/reqService";
import { LOGIN_USER_THREAD } from "../../../global/store/threads";
// import {  } from "../../store/threads";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    borderRadius: "20px",
    minHeight: "40vh",
    padding: theme.spacing(4),
    background: blueGrey[50],
  },
}));

function Login(props) {
  const classes = useStyles();
  const { reqInput, reqSubmitBtn } = props;
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={11} sm={8} md={5} lg={4} lx={3}>
        <Paper className={classes.paper}>
          <Typography variant="h4">Login</Typography>
          <div className="w-100">
            <KijjeInput
              square
              label="Username"
              startIcon={<MailOutline />}
              placeholder="Email"
              type="email"
              {...reqInput({
                thread: LOGIN_USER_THREAD,
                name: "email",
              })}
            />
          </div>
          <div className="w-100">
            <KijjeInput
              square
              label="Password"
              startIcon={<Lock />}
              type="password"
              
              placeholder="Password"
              {...reqInput({
                thread: LOGIN_USER_THREAD,
                name: "password",
              })}
            />
          </div>
          <div className="w-100 d-flex justify-content-between">
            <Typography>Forgot Password ?</Typography>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForward />}
              {...reqSubmitBtn({
                  thread: LOGIN_USER_THREAD,
              })}
            >
              Login
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default reqService(Login);
