/**
 * This hook or function is used to send requests intercept requests and also validate requests
 *
 */
import Axios from "axios";
import { reqNotInPool, reqStarted } from "../../actions/reqActions";
import requestPool from "../../../requests";
import { reqErrorHandlerHook } from "./reqErrorHandlerHook";
import { reqResponseHandler } from "./reqResponseHandler";
import { useHistory, Redirect } from "react-router-dom";
import {
  userRedirectedForAuth,
  isAuthenticating,
} from "../../actions/authAction";
import { AUTH_IS_REFRESHING_AUTH_TOKEN } from "../../actions/authActionTypes";
import { readUserDataOnDevice } from "../authHooks/cacheUserOnDevice";
import { mappedLinks } from "../../../maps";

/**
 * Make a request to the server and handle the response inline to the thread that
 * initilized a request
 *
 * Return a function which takes in two parameters
 * 1. Data
 * The object which includes the data that is going to be sent to the server
 * 2. Thread
 * A unique identifer attached to the request object in the request pool
 *
 * @type function
 * @param dispatch redux dispatch function
 * @param retry boolean | If a request was already fired and its being retried because of network issues
 * @returns function (data, thread) |
 */
export const reqHook = (dispatch, retry = false, cached = true) => (
  data,
  thread,
  callbacks = {
    success: () => {},
    failure: () => {},
  },
  options = {
    addOnThread: "",
    endPoint: false,
  }
) => {
  if (typeof options !== "object") {
    options = { addOnThread: "", endPoint: false };
  }

  var addOnThread = options.addOnThread || "";
  var endPoint = options.endPoint || false;
  var authHeaders = {};
  /**
   * ---------------------------
   * -------WARNING-------------
   * this section seams to have a huge bag during the request retry
   */
  // once retry is enabled the request will have to retry with the data being the request it self
  if (retry === true) {
    // fire the request started event | actions
    const request = data;
    const requestBody = data;
    Axios(request)
      .then((response) => {
        // here req is from the request pool
        return reqResponseHandler(
          response,
          requestBody,
          thread,
          addOnThread,
          dispatch,
          callbacks
        );
      })
      .catch((error_response) => {
        return reqErrorHandlerHook(
          error_response,
          request,
          requestBody,
          thread,
          addOnThread,
          dispatch,
          callbacks
        );
      });
    return;
  }

  // request body holder
  var req = null;

  // application authentication system
  var auth;

  // go through the whole request pool to check the corresponding request to the thread
  for (var reqBody in requestPool) {
    if (requestPool[reqBody].thread == thread) {
      req = requestPool[reqBody];
    } else {
      continue;
    }
  }

  /**
   * Extract the request properties
   */
  const {
    method,
    // endPoint,
    payload,
    headers,
    requiresAuth,
    authenticates,
    responseType,
  } = req;

  if (endPoint === false) {
    endPoint = req.endPoint;
  }

  /**
   *  The request was not found in the request Pool.
   */
  if (req === null) {
    return dispatch(
      reqNotInPool(
        {
          message: "Request Not In Pool",
        },
        thread + addOnThread
      )
    );
  }

  // get the data from the state with the help of dispatch
  dispatch((dispatch, getState) => {
    // get the auth from state
    auth = readUserDataOnDevice()
    /**
     * If the request authenticates
     */
    if (Boolean(authenticates) === true) {

      /**
       * Setting the authorization headers
       */
      authHeaders = {
        Authorization: "Bearer " + auth.access_token,
      }

      /**
       * If the request is refreshing the token
       */
      if(thread === AUTH_IS_REFRESHING_AUTH_TOKEN){
        authHeaders = {
          Authorization: " Bearer " + auth.refresh_token,
        }
      }

      dispatch(isAuthenticating());
    }

    if (cached === false) {
      return;
    }

    var reqPayload = getState().req[thread + addOnThread].payload;
    if (data === null || data === "" || data === "undefined") {
      data = reqPayload;
    }
  });

  // if the user is not authenticated and the request requires authentication
  if (requiresAuth === true) {
    // if user is not authenticated
    if (auth.authenticated === false) {
      let history = useHistory();
      dispatch(userRedirectedForAuth(history.location.pathname));
      return history.push(mappedLinks.auth.login.path);
    }
  }

  //Fire of the request started action and also cache the req for future reload
  dispatch(
    reqStarted(
      {
        reqBody: req,
        reqPayload: data,
      },
      thread + addOnThread
    )
  );

  /**
   * Request config to be pushed to teh server
   */
  const request = {
    method,
    url: endPoint,
    responseType: responseType,
    data: data,

    //This is for cross support
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers" : "Set-Cookie",
      "Same-Site": "false",
      "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS, PATCH, DELETE",
      ...authHeaders
    },
    widthCredentials: true,
  };


  // fire the request started event | actions
  Axios(request)
    .then((response) => {
      // here req is from the request pool
      return reqResponseHandler(
        response,
        req,
        thread + addOnThread,
        addOnThread,
        dispatch,
        callbacks
      );
    })
    .catch((error_response) => {
      var reqBody;
      return reqErrorHandlerHook(
        error_response,
        reqBody,
        request,
        thread + addOnThread,
        addOnThread,
        dispatch,
        callbacks
      );
    });
};
