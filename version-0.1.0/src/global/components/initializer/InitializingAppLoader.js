import React, { useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import MicrosoftLoader from "../loader/MicrsoftLoader";
import { authService } from "../../store/services/authService";
import Images from "../../../admin/images/images";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "auto",
    height: "40px",
  },
}));

/**
 * This function will check the network status
 * It will also check the authentication status
 * It will also check the different things in the application to ensure that the application
 * has been setUp very well
 */

function InitializingAppLoader_(props) {
  const classes = useStyles();
  // console.log(props);

  const { auth, getAuthStatus, isInitializing, setInitializationState } = props;

  const [initialLoad, setInitialLoad] = useState(0);
  useEffect(() => {
    if (isInitializing === 0 && initialLoad === 0) {
      setInitialLoad(1);
      getAuthStatus();
      setInitializationState(1);
    }

    if (auth.isAuthenticating === "started" && initialLoad !== 3) {
      setInitialLoad(2);

      // console.log("The authentication started");
      setInitializationState(2);
    }

    if (auth.isAuthenticating == "completed") {
      // console.log("The authentication completed");
      setInitializationState(3);
      setInitialLoad(3);
    }
  }, [
    initialLoad,
    setInitialLoad,
    isInitializing,
    setInitializationState,
    auth,
  ]);

  return (
    <div className={classes.root}>
      <div>
        <div>
          <div className="w-100 d-flex justify-content-center align-items-center mt-5">
            <Images.Logo
              className={"animated fadeInDown delay-1s " + classes.img}
            />
          </div>
          <div className=" animated fadeInUp delay-1s">
            <Typography className="mt-2">Simple Instant Secure</Typography>
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
  );
}

const InitializingAppLoader = authService(InitializingAppLoader_);
export default InitializingAppLoader;
