/**
 * Type of data to verify 
 * This data can be a payload which is being sent to the server 
 * OR -- it can be response from the server when it needs to be validated. 
 */
const REQUEST_PAYLOAD_VALIDATION = 'REQUEST_PAYLOAD_VALIDATION';
const REQUEST_RESPONSE_VALIDATION = 'REQUEST_RESPONSE_VALIDATION';


//check if the rule is known or not fire off an error
const isKnownRules = (rules = '') => {

}

/**
 * Check if the payload is valid and has the same structure as stated in the requestBody 
 * Structure 
 * If the payload is not valid the request will not go through and will fire off and error
 * to al inputs that hold the data and also a notification will be sent to the server for future use cases
 * @param payloadRules string
 * @param data object
 */
function isValidPayload(payloadRules, data){
    // hold the validation errors
    var valBeforeErrors;

    //go through all the specified rules and if there is any that is not required the 
    // a request Rejection Event will be fired and change in the data structure will be required
    for(var field in payloadRules){

        //list of all rules converted into an array
        var rules = payloadRules[field];
        rules = typeof rules == 'array' ? rules : typeof rules == 'string' ? rules.split('|') : new Error("Payload structure is invalid! \n Please check the structure of request in request pool and validate it to string or array")
        
        if(field in data){

        }
    }

}

/**
 * Validate Request hook 
 * @return boolean
 */
export const reqValidateHook = (REQUEST_VALIDATION_TYPE = REQUEST_PAYLOAD_VALIDATION, structure = null)  => {

    if(structure === null){
        return true;
    } else {
        return false;
    }
}


/**
 * Check of the response has a any validation error associated with it
 * In relation to the api stucture we shall ahave to first check if the response has 
 * 
 */
export const hasValidationErrors = (response) => {
    try{
        //check of the code is in the new api structure
        if('code' in response){
            if(response.code === 'VALIDATION_ERROR' && "errors" in response){
                 return response.errors
            }

            if('errors' in response){ 
                return response.errors
            }
        }
    } catch{
        return []
    }
    
    return []
}