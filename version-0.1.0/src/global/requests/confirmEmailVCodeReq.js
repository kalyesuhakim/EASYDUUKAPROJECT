/**
 *  Send email verification code request to the 
 *  Once code is sent the user will be able to procced with the login Process
 */
const confirmEmailVCodeReq = () => ({
  thread: 'CONFIRM_USER_EMAIL_VERIFICATION_CODE_THREAD',
  method: "post",
  endPoint: "https://api.kijje.ug/auth/verify_verification_code",
  payload: {
    email: "required|email",
    verification_code: "required|integer|max:6|min:6",
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
});