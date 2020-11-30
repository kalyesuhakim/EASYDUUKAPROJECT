import endPoints from "./endPoints";

const { ADD_FAMILY } = require("../store/threads");

/**
 * Login Request and responses
 */
export const addFamilyReq = {
  thread: ADD_FAMILY, // this is provided by the dev at client side so you don't need it
  method: "post",
  endPoint: endPoints.addFamily,
  requiresAuth: false, // requires a user to be authenticated
  payload: {
    first_born_age: "string",
  },
  responseType: "application/json",
  authenticates: false,
  response: {
    expected: {
      payload: {
        first_born_age: "string",
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
        message: "",
      },
    ],
  },
  headers: {
    "Content-Type": "application/json",
  },
};
