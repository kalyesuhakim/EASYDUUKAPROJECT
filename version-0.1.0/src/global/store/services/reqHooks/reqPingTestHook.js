/**
 *  Ping Test To The server to see if it is active or not.
 * This will send concurent requests to the server and see if the network is 
 * still available. 
 */

import Axios from "axios"

/**
 * @function PingTest
 * @return boolean
 * @param 
 */
export const reqPingTestHook = (dispatch) => () => {
    dispatch((dispatch, getState) => {
        const cachedReqs = getState().req.cachedReqs;
        // console.log("The cached requests are here: ", cachedReqs);

        Axios.get()
            .then(res => {

            }).catch(err => {
                // console.log("There was an error");
            })
    })
}