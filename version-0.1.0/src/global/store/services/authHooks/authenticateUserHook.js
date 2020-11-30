/**
 *  Function to authenticate the user
 * Validation of user input and checking if the user is approved
 * Checking for the token will be done and once the token is not the a refresh will happen
 * If the refresh fails then the user will be required to re-login | re-authenticate into the application
 */

import { Redirect } from "react-router-dom";
import { userAccessGranted, userAccessDenied } from "../../actions/authAction";
import {
  readUserDataOnDevice,
  cacheUserDataOnDevice,
} from "./cacheUserOnDevice";
import { ACCESS_GRANTED } from "../../actions/authActionTypes";

/**
 * @type function
 * @return function
 * @param dispatch function - from redux to dispatch
 */
const AuthenticateUserHook = (dispatch) => (
  user = {},
access = "DENY_ACCESS"
) => {



  /**
   * The cached user data from the localStorage
   */
  var cachedUser = readUserDataOnDevice();
  // console.log("The cached user is: ", cachedUser);
  switch (access) {
    case ACCESS_GRANTED:
    // console.log("The access was granted")
      cacheUserDataOnDevice(user);
      dispatch(userAccessGranted(user));
      break;

    case "ACCESS_DENIED":
      break;

    case "HAD_ACCESS":
      /**
       * If the user had access to the api, the app will check for a refresh token
       * and then update the user data verysoon.
       * If the user is not there in the local storage or the [user] key was tempered with please 
       * ignore the details and then deny access to the application
       *
       */
      if(cachedUser === false  ) return false // please don't do anything if the user was not cached 
      

      break;

    default:
      // check if user is authenticated and if user is not authenticated do nothing
      if (cachedUser === false) {
        return false; // the user is not there please try to relogin
      }

      break;
  }
  if (readUserDataOnDevice() === false && access !== ACCESS_GRANTED) {
    return Redirect({
      to: "/login",
    });
  }

  if (access === "DENIED") {
    cacheUserDataOnDevice(user);
    return dispatch(userAccessDenied(user));
  }

};

const authenticateUserHook = AuthenticateUserHook;
export default authenticateUserHook;
