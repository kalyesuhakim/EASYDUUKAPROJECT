export const AUTH_LOGIN_USER_COMPLETE = 'AUTH_LOGIN_USER_ACTION_COMPLETE';

export const AUTH_LOGOUT_USER_COMPLETE = 'AUTH_LOGOUT_USER_COMPLETE';

export const USER_NEEDS_AUTH = 'AUTH_USER_NEEDS_AUTH';


export const AUTH_REFRESH_AUTH_TOKEN = 'AUTH_REFRESH_AUTH_TOKEN';

/**
 * Access has been fully granted and can be able to access all sections 
 * of the application that have been unauthorized
 */
export const AUTH_USER_ACCESS_GRANTED = 'AUTH_USER_ACCESS_GRANTED';

/**
 * User access has been denied 
 * This happens when wrong credentials have been given out the auth api
 */
export const AUTH_USER_ACCESS_DENIED = 'AUTH_USER_ACCESS_DENIED';

/**
 * Deny an authenticated user access when they want to access a protected 
 * property
 */
export const AUTH_USER_DENY_ACCESS = "AUTH_USER_DENY_ACCESS";

/**
 * Get access from the server once a user has been locked out
 */
export const AUTH_USER_GET_ACCESS = 'AUTH_USER_GET_ACCESS';

/**
 * Access granted when user has been authenticated
 */
export const ACCESS_GRANTED = 'ACCESS_GRANTED';

export const ACCESS_DENIED = 'ACCESS_DENIED';

/**
 * User Redicrected to get auth access
 */
export const AUTH_USER_REDIRECTED_FOR_AUTH = 'AUTH_USER_REDIRECTED_FOR_AUTH';

/**
 *  When an authentication request is made to the server 
 */
export const AUTH_IS_AUTHENTICATING = 'AUTH_IS_AUTHENTICATING';

/**
 * When an Refreshing the authentication token
 */
export const AUTH_IS_REFRESHING_AUTH_TOKEN = 'AUTH_IS_REFRESHING_AUTH_TOKEN'

/**
 * Logout User from the application
 */
export const AUTH_LOGOUT_USER = 'AUTH_LOGOUT_USER';