/**
 *  This file contains all the routes that are used in the web browser
 *  The routes here are all get routes 
 */

import { mappedConfig } from "../maps";


// const HOST = window.location.protocol+'//'+ window.location.host;
const endPoint = ($url) => {
    return mappedConfig.HOST + $url;
} 


const endPoints = {
  auth: {
    login: endPoint("/login"),
    logout: endPoint("/logout"),
    refreshToken: endPoint("/refresh"),
  },
  campaigns: {
    webhack: endPoint("/campaigns/web-hack"),
  },
  sendContactUsMessage: endPoint("/message/contactus/send"),
};

export default endPoints;