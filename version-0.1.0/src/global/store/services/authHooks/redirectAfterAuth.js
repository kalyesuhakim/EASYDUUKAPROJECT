import React from 'react';
import { userRedirectedForAuth } from "../../actions/authAction"
import { Redirect } from "react-router-dom";
import {mappedLinks} from '../../../maps';
/**
 * Redirect the user to the previous route after the user has been authenticated
 * If the user passed the authentication then redirect to the route that they last accessed
 * @type function 
 * @param dispatch  redux dispatch function 
 * @param route string for route or pathname that needs authentication
 * @returns Redirect  ReactComponent 
 */
export const RedirectAfterAuth =  dispatch => route => props => {
    dispatch(userRedirectedForAuth(route));
    return <Redirect to={mappedLinks.auth.login.path} />
}   
