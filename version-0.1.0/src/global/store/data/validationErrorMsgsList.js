export const validationErrorMsgsList = [
  {
    code: "REQUEST_MISSING_EMAIL",
    title: "Invalid Email",
    message: "Email is required",
    severity: "error",
  },
  {
    code: "EMAIL_EXISTS",
    title: "Email Already taken",
    message: "The email you are trying to use was has an account with us",
    severity: "error",
  },
  {
    code: "REQUEST_MISSING_PHONE_NUMBER",
    title: "Phone number is missing",
    message: "Please enter a valid phone number",
    severity: "error",
  },
  {
    code: "REQUEST_MISSING_PASSWORD",
    title: "Password Required",
    message: "Please enter a strong password",
    severity: "error",
  },
  {
    code: "REQUEST_MISSING_FIRST_NAME",
    title: "First Name is required",
    message: "Please enter your First Name",
    severity: "error",
  },

  {
    code: "REQUEST_MISSING_LAST_NAME",
    title: "Last Name is required",
    message: "Please enter your Last Name",
    severity: "error",
  },
  {
    code: "REQUEST_MISSING_COUNTRY",
    title: "Country is Required",
    message: "Please enter your country",
    severity: "error",
  },

  {
    code: "UNKNOWN_ERROR",
    title: "Some thing Went Wrong",
    message: "An error occurred while creating your account",
    severity: "error",
  },

  {
    code: "EMAIL_VERIFICATION_FAILED",
    title: "Verification Code Rejected",
    message: "The Verification Code Provided is either Wrong or it has expired",
    severity: "error",
  },

  {
    code: "REQUEST_MISSING_VERIFICATION_CODE",
    title: "Verification Code Missing",
    message: "Valid Verification code is need",
    severity: "warning",
  },
  {
    code: "UNAUTHORIZED",
    title: "Invalid Credentials",
    message: "Please enter a valid Email and Password",
    severity: "warning",
  },
  {
    code: "ERROR_WITH_REQUEST", // IF A REQUEST IS NOT THE SAME AS EXPECTED 
    title: "Malformed Response",
    message: "Something went wrong, we are doing our best to solve it",
    severity: "error",
  },
];
