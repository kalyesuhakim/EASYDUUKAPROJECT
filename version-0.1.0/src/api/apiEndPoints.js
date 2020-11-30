/**
 * All api End points have been brought here 
 */

import { INVENTORY_CREATE_INVENTORY, INVENTORY_DELETE_INVENTORY, INVENTORY_GET_INVENTORIES, INVENTORY_GET_INVENTORY_DETAILS, INVENTORY_UPDATE_INVENTORY } from "./apiThreads";

 const base_url = "http://apis.hapipie.com:3333";
 const makeUrl = (endPoint, params = {}) => {
     for(var param in params){
         endPoint = endPoint.replace(param, params[param]);
     }
     return base_url+ endPoint
 }   
 
 export const apiEndPoints = {
   [INVENTORY_CREATE_INVENTORY]: {
     endPoint: () => makeUrl("/inventory/create"),
     method: "post",
   },
   [INVENTORY_GET_INVENTORIES]: {
     endPoint: (params = {}) => makeUrl("/inventory/all"),
     method: "get",
   },
   [INVENTORY_GET_INVENTORY_DETAILS]: {
     endPoint: (params = {}) => makeUrl("/inventory/details/:inventoyId", params),
     method: "get",
   },
   [INVENTORY_DELETE_INVENTORY]: {
     endPoint: (params = {}) => makeUrl("/inventory/delete/:inventoryId", params),
     method: "delete",
   },
   [INVENTORY_UPDATE_INVENTORY]: {
     endPoint: (params = {}) => makeUrl("/inventory/update/:inventoryId", params),
     method: "patch",
   },
 };