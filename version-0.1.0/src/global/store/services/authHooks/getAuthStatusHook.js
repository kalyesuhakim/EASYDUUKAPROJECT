/**
 * Get the last authentication status
 *  is user was authenticated and then allow him to the protected routes
 *
 */

const { readUserDataOnDevice } = require("./cacheUserOnDevice");
const { reqHook } = require("../reqHooks/reqHook");
const { isAuthenticating, isAuthenticatingFinished } = require("../../actions/authAction");
const { AUTH_REFRESH_AUTH_TOKEN } = require("../../actions/authActionTypes");

export const getAuthStatusHook = (dispatch) => () => {
  const auth = readUserDataOnDevice();
  if (auth === false) {
    dispatch(isAuthenticatingFinished())
     return false; // the user does not have access
  }

  dispatch(isAuthenticating());

  
  // setoff a request to ther server to check is the data authenticated data is valid
  const data = {
    token: auth.refresh_token,
    access_token: auth.access_token,
    refresh_token: auth.refresh_token,
  };


  reqHook(dispatch, false, false)(data, AUTH_REFRESH_AUTH_TOKEN);
};
