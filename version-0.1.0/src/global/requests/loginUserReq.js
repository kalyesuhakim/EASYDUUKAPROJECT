import endPoints from "./endPoints";

const { LOGIN_USER_THREAD } = require("../store/threads");

/**
 * Login Request and responses
 */
export const loginUserReq = {
  thread: LOGIN_USER_THREAD, // this is provided by the dev at client side so you don't need it
  method: "post",
  endPoint: endPoints.auth.login,
  requiresAuth: false, // requires a user to be authenticated
  payload: {
    email: "required|email",
    password: "required|string",
  },
  responseType: "application/json",
  authenticates: true,
  response: {
    expected: {
      access_token: "string",
      token_type: "string",
      expires_in: "integer",
      payload: {
        id: "integer",
        first_name: "string|required",
        last_name: "string|required",
        email: "required|email",
        phone_number: "required|phone_number",
        address: "string",
        gender: "string",
      },
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
      {
        code: 433,
        message: ""
      },

    ],
  },
  headers: {
    "Content-Type": "application/json",
  },
};
