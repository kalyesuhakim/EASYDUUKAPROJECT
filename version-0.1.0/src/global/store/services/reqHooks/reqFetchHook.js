/**
 * Fetch the data from the server 
 * this hook makes calls to the server.abs
 * 
 * I can use a cached request from the request hook or it can simply 
 * Make a request on an open end point
 */

 const reqFetchHook = (options = {
     endPoint: null,
     method: null,
     thread: null,
 }) => {

    /**
     * Check if the correct options have been given
     */

     const {endPoint, method, thread} = options;

     if(thread === null ){
       throw new Error("Thread Must Be provided in Req Fetch Hook");
        return; 
     }

     


 }