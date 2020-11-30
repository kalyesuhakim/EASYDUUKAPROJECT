/**
 * Alert Notifications which are shown to the user incase of any error 
 * The Error could be validation or something near to validation 
 * Errors will be added and removed buh not saved to the device nor to the server
 * 
 * Alert Notifications are stateless notfications 
 */

import { ADD_ALERT_NOTIFICATION, REMOVE_ALERT_NOTIFICATION } from "./alertNotifsActionTypes";

 export const addAlertNotifAction = (notification) => ({
     type: ADD_ALERT_NOTIFICATION,
     notification
 })

  export const removeAlertNotifAction = (notification) => ({
    type: REMOVE_ALERT_NOTIFICATION,
    notification,
  });