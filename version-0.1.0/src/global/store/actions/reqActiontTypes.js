/**
 * ------------------REQUEST ACTIONS oR EVENTS ------------------
 * These are the registered events that are fired when ever a request has been performed
 * these events are attached to the reducer
 */

export const REQ_CACHED = 'REQUEST_HAS_BEEN_CACHED';

export const REQ_RETRY_FROM_CACHE = 'REQUEST_IS_HAS_FAILED_AND_IS_RETRYING';

//a network request has been fired off
export const REQ_STARTED = 'REQUEST_STARTED';

// the network is not available and no internet at the moment
export const REQ_NETWORK_ERROR = 'REQUEST_NETWORK_ERROR';

//request failed to procced, this can be caused by poor network or validation
export const REQ_FAILED = 'REQUEST_FAILED_TO_THROUGH'

//request has been completed;
export const REQ_COMPLETED = 'REQUEST_COMPLETED';

// the request performed returned the desired response
export const REQ_COMPLETED_WITH_VALID_RESPONSE = 'REQUEST_HAS_COMPLETED_SUCCESSFULLY'

//Request has completed with an invalid response which is not needed in the response body
export const REQ_COMPLETED_WITH_INVALID_RESPONSE = 'REQUEST_COMPLETED_WITH_INVALID_RESPONSE'

//On Field Change 
export const REQ_INPUT_CHANGE = 'REQUEST_INPUT_CHANGE';

// InitiAlize the requests on the first component mount
export const REQ_INITIALIZE_REQS = 'REQUEST_INITIALIZATION';

/**
 * Request failed during validation
 */
export const REQ_FAILED_WITH_VALIDATION_ERROR = 'REQ_FAILED_WITH_VALIDATION_ERROR';


/**
 * Request request not available in the request pool
 * @type const string
 * @name REQ_NOT_IN_REQUEST_POOL
 */
export const REQ_NOT_IN_REQUEST_POOL = 'REQ_NOT_IN_REQUEST_POOL';

