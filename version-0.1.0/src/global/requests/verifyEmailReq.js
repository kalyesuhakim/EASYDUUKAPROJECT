import { mappedLinks } from "../maps";

const {
  VERIFY_USER_EMAIL_THREAD,
  AUTH_MAIN_THREAD,
} = require("../store/threads");

export const verifyEmailReq = {
  mainThread: AUTH_MAIN_THREAD,
  thread: VERIFY_USER_EMAIL_THREAD,
  requiresAuth: false,
  method: "post",
  endPoint: "http://api.kijje.test/auth/verify_email",
  payload: {
    email: "required|email",
  },
  response: {
    expected: {
      success: true,
      message: "string",
    },
    error: {
      success: false,
      message: "string|required",
    },
  },
  headers: {
    "Content-Type": "application/json",
  },
  redirectTo: mappedLinks.auth.register.account_setup.verify_email.path,
};
