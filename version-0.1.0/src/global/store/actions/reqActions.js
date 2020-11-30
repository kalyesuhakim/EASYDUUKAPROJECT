import { REQ_INPUT_CHANGE, REQ_INITIALIZE_REQS, REQ_NOT_IN_REQUEST_POOL, REQ_STARTED, REQ_COMPLETED_WITH_INVALID_RESPONSE, REQ_COMPLETED_WITH_VALID_RESPONSE, REQ_NETWORK_ERROR, REQ_FAILED, REQ_COMPLETED } from "./reqActiontTypes";
import { REQ_MAIN_THREAD } from "../threads";


/**
 *  Action fired when ever an input changes state from one to another 
 */
export const onReqInputChange = (
    mainThread, thread, data
) => ({
    type: REQ_INPUT_CHANGE,
    mainThread,
    thread,
    data,
})

/**
 * Initialize the Request and cache all 
 * the outgoing request and their known bodies
 * @param data object
 * @param thread string
 * @param mainThread string
 * @returns object
 */
export const initializeReqs = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_INITIALIZE_REQS,
    mainThread,
    thread,
    data,
})


/**
 * Request not available in the request pool
 * @param data object
 * @param thread string
 * @param mainThread string
 * @returns object
 */
export const reqNotInPool = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_NOT_IN_REQUEST_POOL,
    mainThread,
    thread,
    data,
})

export const reqStarted = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_STARTED,
    mainThread,
    thread,
    data,
})

/**
 * Request Completed with invalid response 
 * @function reqCompletedWithInvalidResponse 
 * @return object
 */
export const reqCompWithIR = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_COMPLETED_WITH_INVALID_RESPONSE,
    mainThread,
    thread,
    errors: data.errors,
    data: data.data,
})

/**
 * Request completed with valid response
 * The request Completed with a valid response from the server
 * @type function reqCompletedWithValidResponse
 * @param data object,
 * @param thread string
 * @param mainThread string
 * @returns object
 */
export const reqCompWithVR = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_COMPLETED_WITH_VALID_RESPONSE,
    mainThread,
    thread,
    data,
});


/**
 * A network error happened while the request was shipping
 * @type function reqNetworkError
 * @param data object,
 * @param thread string
 * @param mainThread string
 * @returns object
 */
export const reqNetworkError = (req, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_NETWORK_ERROR,
    mainThread,
    thread,
    req,
});

/**
 * A request failed at docking- before it was shiped to the server 
 * @type function reqFailed
 * @param data object,
 * @param thread string
 * @param mainThread string
 * @returns object
 */
export const reqFailed = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_FAILED,
    mainThread,
    thread,
    data,
});


/**
 * Request has completed 
 * @type function reqCompleted
 * @param data object,
 * @param thread string
 * @param mainThread string
 * @returns object
 */
export const reqCompleted = (data, thread, mainThread = REQ_MAIN_THREAD) => ({
    type: REQ_COMPLETED,
    mainThread,
    thread,
    data,
});