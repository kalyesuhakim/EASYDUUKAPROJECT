import endPoints from "./endPoints";

const { SEND_CONTACT_US_MESSAGE_THREAD } = require("../store/threads");

/**
 * Login Request and responses
 */
export const sendContactUsMessageReq = {
  thread: SEND_CONTACT_US_MESSAGE_THREAD, // this is provided by the dev at client side so you don't need it
  method: "post",
  endPoint: endPoints.sendContactUsMessage,
  requiresAuth: false, // requires a user to be authenticated
  payload: {
    email: "required|email",
    message: "required|string",
    full_name: "required|string",
  },
  responseType: "application/json",
  authenticates: false,
  response: {
    expected: {
      access_token: "string",
      token_type: "string",
      expires_in: "integer",
      payload: {
          status: true,
          sent: true,
      },
    },
    error: {
      /**
       * Please elly when it comes to this part please help me and give the information as i told yo
       * The if its a validation error then it shout have the code for validation
       * also give me the key pair data such that all can be well
       */
      status: false,
      messages: "array",
    },
    errorCodes: [
      {
        code: 404,
        message: "Page not found", // this is the default message
        action: "", // ignore this,
      },
      {
        code: 433,
        message: "",
      },
    ],
  },
  headers: {
    "Content-Type": "application/json",
  },
};
