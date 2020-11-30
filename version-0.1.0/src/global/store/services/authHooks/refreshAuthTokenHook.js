/**
 *  If the user was authenticated and the token is there on the device
 *  Please re-authenticated and see if you can be able to login the system again
 * 
 */

import { readUserDataOnDevice } from "./cacheUserOnDevice";
import { reqHook } from "../reqHooks/reqHook";
import { AUTH_REFRESH_AUTH_TOKEN } from "../../actions/authActionTypes";

/**
 * Refresh the cached user auth data
 */
 export const refreshAuthTokenHook = (dispatch, user = readUserDataOnDevice()) => {

    /**
     * If the user is not there please don't bather with re-authenticating
     */
    if(user === false || user === null){
        return false;
    }

    /**
     * The data that will be used to refresh the token 
     */
    console.log("**** This is working on here");
    const data = {
        access_token: user.access_token,
        refresh_token: user.access_token,
    }

    reqHook(dispatch)(data, AUTH_REFRESH_AUTH_TOKEN);

 }