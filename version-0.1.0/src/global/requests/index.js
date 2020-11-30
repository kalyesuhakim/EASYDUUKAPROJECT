import { verifyEmailReq } from "./verifyEmailReq";
import { loginUserReq } from "./loginUserReq";
import { refreshAuthTokenReq } from "./refreshAuthTokenReq";
import { logoutUserReq } from "./logoutUserReq";
import { sendContactUsMessageReq } from "./sendContactUsMessageReq";
import { webhackReq } from "./webhackReq";
import {addFamilyReq} from './addfamilyReq';
export const apiToken = "";
export const requestToken = "";


/**
 * Load the created request to the application
 */
const requestPool = {
    verifyEmailReq: verifyEmailReq,
    loginUserReq: loginUserReq,
    refreshAuthTokenReq: refreshAuthTokenReq,
    logoutUserReq: logoutUserReq,
    sendContactUMessageReq: sendContactUsMessageReq,
    webhack: webhackReq,
    addfamilyReq: addFamilyReq
    
}

export default requestPool;

