import React from "react";
import { authService } from "../../store/services/authService";
import MicrosoftLoader from "../../../admin/components/loader/MicrsoftLoader";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.white,
  },
  img: {
    width: "auto",
    height: "40px",
  },
}));

function AuthLoggingOutUser_(props) {
  const classes = useStyles();
  const { auth } = props;

  if(auth.isLoggingOutUser === "completed")
    return <div></div>

  if (auth.isLoggingOutUser === "started")
    return (
      <div className={classes.root}>
        <div>
          <div>
            <div className="w-100 d-flex justify-content-center align-items-center mt-5">
              <div className=" animated fadeInUp delay-1s">
                <Typography className="mt-2">Signing Out</Typography>
                <div className="d-flex mt-2 align-items-center justify-content-center">
                  {/* <Typography variant="h5" className="pr-4 mt-3">
            Loading
          </Typography> */}
                  <MicrosoftLoader />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return <div></div>;

}

const AuthLoggingOutUser = authService(AuthLoggingOutUser_);
export default AuthLoggingOutUser;
