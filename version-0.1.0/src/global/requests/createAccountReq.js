/**
 * Create an account | Sign up after the entire registration process is done
 */

const createAccountReq = () => ({
  thread: 'CREATE_USER_ACCOUNT_THREAD',
  method: "post",
  endPoint: "https://api.kijje.ug/auth/signup",
  payload: {
    first_name: "required|string",
    last_name: "required|string",
    email: "required|email",
    phone_number: "required|phone_number",
    address: "string|required",
    usertype: "string|required",
    password: "string|required|password",
  },
  response: {
    expected: {
      success: true,
      message: "string|required",
    },
    error: {
      success: false,
      message: "string|required",
    },
  },
  headers: {
    "Content-Type": "application/json",
  },
});
