/**
 * Handler for all the responses that have been completed successfully with no proplem
 * @author Gatunye Lucky
 *
 */

import {
  reqCompWithVR,
  reqCompWithIR,
  reqCompleted,
} from "../../actions/reqActions";
import { Redirect } from "react-router-dom";
import {
  userAccessGranted,
  isAuthenticatingFinished,
} from "../../actions/authAction";
import authenticateUserHook from "../authHooks/authenticateUserHook";
import { ACCESS_GRANTED } from "../../actions/authActionTypes";
import { addAlertNotifAction } from "../../actions/alertNotifsActions";
import { validationErrorMsgsList } from "../../data/validationErrorMsgsList";
import { hasValidationErrors } from "./reqValidateHook";

/**
 * Handle and manage all docking responses from the server
 * @function reqResponseHandler
 * @param response object | The response object from the server
 * @param request object | the request instance from the request pool before shipping to the server
 * @param thread string | thread which the request is attached to
 * @param dispatch function | redux dispatch function that dispatches all actions or events
 * @return
 */
export const reqResponseHandler = (
  serverResponse,
  request,
  thread,
  addOnThread,
  dispatch,
  callbacks = {
    success: (...params) => {},
    failure: (...params) => {},
  }
) => {
  try {
    // request has fully docked and ready for checkup

    // console.log("The server response:", serverResponse);

    const { expected, error } = request.response;
    const { headers, responseType, authenticates } = request;

    const { data } = serverResponse;

    dispatch(reqCompleted(data, thread));
    /**
     * By default the response is valid
     * If their is problem with the request the application will simply return true
     */
    var validResponse = true;

    // console.clear();

    var errors = hasValidationErrors(data);

    if ("success" in data) {
      /**
       * Check if the response was valid
       */
      if (data.success !== true) {
        // finish auth if it was active
        dispatch(isAuthenticatingFinished());

        /**
         * Check for all validation error messages
         * and fire off posible error messages
         */
        validationErrorMsgsList.map((error) => {
          if (error.code == data.error_code) {
            return dispatch(addAlertNotifAction(error));
          }
        });

        // We return the failure callback since the operation was not a success
        return callbacks.failure(data);
      }
    }

    // if (authenticates === true) {
    //   var user = data;
    //   dispatch(reqCompWithVR(user, thread,));
    //   authenticateUserHook(dispatch)(user, ACCESS_GRANTED);
    //   dispatch(isAuthenticatingFinished());
    // }

    /**
     * -------------------------------STAR OF REQUEST VALIDATION --------------------------------------
     * ************************************************************************************************
     */
    /**
     * Check if the response was correct
     */
    for (var key in expected) {
      if (key in data) {
        /**
         * Check if the response has nested data or not
         */
        if (typeof expected[key] === "string") {
          var expectedTypes = expected[key].split("|");
          for (var type in expectedTypes) {
            type = expectedTypes[type];
            if (typeof data[key] == type) {
              continue;
              // console.log("\n*****************\nTYPE: ", type, typeof data[key], "\nThe type is the same:\n", data[key], "\n***************")
            } else {
              validResponse = false;
              dispatch(
                addAlertNotifAction({
                  code: "ERROR_WITH_REQUEST", // IF A REQUEST IS NOT THE SAME AS EXPECTED
                  title: "Malformed Response",
                  message:
                    "Something went wrong, we are doing our best to solve it",
                  severity: "error",
                })
              );
            }
          }
        } else {
          /**
           * The Expected field has nested data
           */
          var expectedNested = expected[key];
          for (var nestedKey in expectedNested) {
            if (nestedKey in data[key]) {
              /**
               * Check of the key has the same datatype
               */
              var expectedTypes = expectedNested[nestedKey].split("|");
              for (var type in expectedTypes) {
                type = expectedTypes[type];
                if (typeof data[key][nestedKey] == type) {
                  continue;
                  // console.log("\n*****************\nTYPE: ", type, typeof data[key], "\nThe type is the same:\n", data[key], "\n***************")
                } else {
                  validResponse = false;
                  dispatch(
                    addAlertNotifAction({
                      code: "ERROR_WITH_REQUEST", // IF A REQUEST IS NOT THE SAME AS EXPECTED
                      title: "Malformed Response",
                      message:
                        "Something went wrong, we are doing our best to solve it",
                      severity: "error",
                    })
                  );
                }
              }
            } else {
              /**
               * Request is giving out errors that are in development
               */
              validResponse = false;
              dispatch(
                addAlertNotifAction({
                  code: "ERROR_WITH_REQUEST", // IF A REQUEST IS NOT THE SAME AS EXPECTED
                  title: "Malformed Response",
                  message:
                    "Something went wrong, we are doing our best to solve it",
                  severity: "error",
                })
              );
            }
          }
        }
      } else {
        /**
         * The request is mulformed and  some keys are not there
         */
        validResponse = false;
        dispatch(
          addAlertNotifAction({
            code: "ERROR_WITH_REQUEST", // IF A REQUEST IS NOT THE SAME AS EXPECTED
            title: "Malformed Response + In Dev Mode",
            message:
              "API RETURNED invalid response please check the api request ",
            severity: "error",
          })
        );
      }
    }

    //----------------------------END OF REQUEST VALIDATION --------------------------------------
    //************************************************************************************************

    /**
     * Check if the request has valid or not
     * If it does not have then complete the execution of the request and send a real
     * Error feedback
     *
     */

    if (Boolean(authenticates) === true) {
      dispatch(isAuthenticatingFinished());

      if ("status" || "success" in data) {
        if (data["status"] || data["success"] === true) {
          authenticateUserHook(dispatch)(data, ACCESS_GRANTED);
        }
      }
    }

    if (validResponse === false) {
      dispatch(isAuthenticatingFinished());
      dispatch(reqCompWithIR({data: data, errors: errors}, thread));
      return callbacks.success(data);
    }

    callbacks.success(data);
    dispatch(isAuthenticatingFinished());

    // request completed with valid response;
    return dispatch(reqCompWithVR(data, thread));
  } catch ($exception) {
    // console.log("The exception is here", $exception);
    switch (serverResponse.status) {
      case 204:
        dispatch(
          addAlertNotifAction({
            code: "DEV_ERROR_SERVER_RES_204", // IF A REQUEST IS NOT THE SAME AS EXPECTED
            title: "Response completed with no content",
            message:
              "API RETURNED invalid response please check the api request ",
            severity: "error",
          })
        );
      break;

      default: 
      dispatch(addAlertNotifAction({
        code: 'DEV_ERROR_UNKNOWN_EXCEPTION',
        title: "Unknown Exception",
        message: "The Execption is not known",
        severity: "error",
      }))
    }
  }
};
