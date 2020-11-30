/**
 * --------------------INTRO------------------
 * Requests errors are served by this script all the errors that happen in the way will be
 * hanldled by this script
 */

import { reqNetworkError, reqCompWithIR } from "../../actions/reqActions";
import { reqHook } from "./reqHook";
import { isAuthenticatingFinished } from "../../actions/authAction";
import { addAlertNotifAction } from "../../actions/alertNotifsActions";
import { hasValidationErrors } from "./reqValidateHook";

/**
 * Request Error Handler
 * Handle any incoming error via the request Hook
 * @function reqErrorHandler
 * @param error object
 * @param data object
 * @param dispatch function
 * @param thread string
 * @returns function
 */
export const reqErrorHandlerHook = (
  error,
  requestBody,
  request,
  thread,
  addOnThread,
  dispatch,
  callbacks = { success: () => {}, failure: () => {} }
) => {
  // check is its a network Error and retry again
  dispatch(isAuthenticatingFinished());

  if (typeof error.response === "undefined") {
    console.log(error);

    // dispatch(reqNetworkError(request, thread));

    dispatch(
      addAlertNotifAction({
        code: "NETWORK ERROR",
        title: "Network Error",
        message: "It seams you are offline, check your network and try again",
        severity: "error",
      })
    );
    dispatch(reqCompWithIR({ data: {}, errors: {} }, thread));
    // setTimeout(() => {
    //     const RETRY = true;
    //     return reqHook(dispatch, RETRY)(request, thread);
    // }, 1000 * 5) // after five seconds retry
    return;
  }

  // the errors variable that is going to hold the errors
  var errors = {};

  if ("response" in error) {
    errors = hasValidationErrors(error.response.data);

    switch (error.response.status) {
      case 301:
        dispatch(
          addAlertNotifAction({
            code: "DEV_ERROR_PAGE_MOVED_PARMANETLY",
            title: "ROUTE PERMANETLY_MOVED " + error.response.status,
            message: "Internal Server Error while making the request",
            severity: "error",
          })
        );
        break;
      case 400:
        dispatch(
          addAlertNotifAction({
            code: "DEV_ERROR_BAD_REQUEST",
            title: "BAD REQUEST  " + error.response.status,
            message:
              "This can be a result of invalid for data which has errors",
            severity: "error",
          })
        );
        break;
      case 404:
        dispatch(
          addAlertNotifAction({
            code: "PAGE_NOT_FOUND" + new Date().getMilliseconds(),
            title: "Dev Error 400 " + new Date().getMilliseconds(),
            message: "The Request had as completed with Page not found",
            severity: "error",
          })
        );
        break;

      case 500:
        dispatch(
          addAlertNotifAction({
            code: "INTERNAL_SERVER_ERROR",
            title: "DEV ERROR 500 ",
            message: "Internal Server Error while making the request",
            severity: "error",
          })
        );
        break;
      default:
        dispatch(
          addAlertNotifAction({
            code: "INTERNAL_SERVER_ERROR",
            title: error.response.statusText + " " + error.response.status,
            message: "Internal Server Error while making the request",
            severity: "error",
          })
        );
    }
  }

  dispatch(reqCompWithIR({ data: {}, errors: errors }, thread));
  callbacks.failure(error.response.data);
  return;
  // check if its a validation error
};
