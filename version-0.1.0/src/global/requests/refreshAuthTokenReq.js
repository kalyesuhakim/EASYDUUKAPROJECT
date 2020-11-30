import endPoints from "./endPoints";
import { AUTH_REFRESH_AUTH_TOKEN } from "../store/actions/authActionTypes";

/**
 * Login Request and responses
 */
export const refreshAuthTokenReq = {
  thread: AUTH_REFRESH_AUTH_TOKEN, // this is provided by the dev at client side so you don't need it
  method: "post",
  endPoint: endPoints.auth.refreshToken,
  requiresAuth: false, // requires a user to be authenticated
  payload: {
    access_token: "required|string",
    bearer: "required|string",
  },
  responseType: "application/json",
  authenticates: true,
  response: {
    expected: {
      code: "boolean",
      access_token: "string",
      authenticated: "boolean",
      body: "object",
      code: "string",
      errors: "object",
      refresh_token: "string",
      status: "boolean",
      success: "boolean",
    },
    error: {
      /**
       * Please elly when it comes to this part please help me and give the information as i told yo
       * The if its a validation error then it shout have the code for validation
       * also give me the key pair data such that all can be well
       */
      success: false,
      message: "string|required",
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
