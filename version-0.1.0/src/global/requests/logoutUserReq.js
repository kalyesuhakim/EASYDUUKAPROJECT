import endPoints from "./endPoints";
import { AUTH_LOGOUT_USER } from "../store/actions/authActionTypes";

/**
 * Login Request and responses
 */
export const logoutUserReq = {
  thread: AUTH_LOGOUT_USER, // this is provided by the dev at client side so you don't need it
  method: "post",
  endPoint: endPoints.auth.logout,
  requiresAuth: true, // requires a user to be authenticated
  payload: {
    token: "required|string",
  },
  responseType: "application/json",
  authenticates: false,
  response: {
    expected: {
      success: "boolean",
      message: "string",
    },
    error: {
      /**
       * Please elly when it comes to this part please help me and give the information as i told yo
       * The if its a validation error then it shout have the code for validation
       * also give me the key pair data such that all can be well
       */
      error: "string",
    },
    errorCodes: [
      {
        code: 404,
        message: "Page not found", // this is the default message
        action: "", // ignore this,
      },
    ],
  },
  headers: {
    "Content-Type": "application/json",
  },
};
