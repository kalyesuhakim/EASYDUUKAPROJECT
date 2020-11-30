const _store_key_ = btoa('user');
/**
 * Save the user session and token on the device he s currently on
 */

 export const cacheUserDataOnDevice = (user = {}) => {
     
     if(user === {}){
        console.log("There is no infromation here")
         return false;
     }

     const storage = localStorage;
     user = {...user, ['authenticated']: true};
     storage.setItem(_store_key_, encryptUserDataOnDevice(user));
     
 }

 /**
  * Reads from the localstorage and gets the user data,
  * decodes the data and after decoding the data it is 
  * @returns boolean | json 
  * @type function
  */
 export const readUserDataOnDevice = () => {

     const storage = localStorage;

     let user = storage.getItem(_store_key_)
     
     // check if the key is there and if not return false
     if(user === null || user === 'undefined' || user === ""){
         return false;
     }

     user = decryptUserDataOnDevice(storage.getItem(_store_key_));
     return user;
 }

 const SPLIT_ONE = "***090rand***";
 const SPLIT_TWO = "***7+=%***";

 /**
  * Encrypt the user data such that it can be stored safely
  * @type function
  * @return string
  * @param data array | json data
  */
 export const encryptUserDataOnDevice = (data) => {
     data = JSON.stringify(data);
     let encoded = btoa(data);
     let splited = encoded.split("");
     let  joined = splited.join(SPLIT_ONE);
     encoded = btoa(joined);
     splited = encoded.split("");
     joined = splited.join(SPLIT_TWO);
     return btoa(encoded);
 }

 /**
  * Decrypt the user data that was encrypted with out encrypter
  * @type function
  * @param string
  * @returns object | json parsed data
 */
 export const decryptUserDataOnDevice = (data) => {
     var decoded = atob(data);
     var splited = decoded.split(SPLIT_TWO);
     var joined = splited.join("");
     decoded = atob(joined);
     splited = decoded.split(SPLIT_ONE)
     joined = splited.join("");

     decoded = JSON.parse(atob(joined))

     return decoded;
 }