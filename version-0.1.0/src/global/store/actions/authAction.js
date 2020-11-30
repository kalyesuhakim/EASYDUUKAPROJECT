/**
 * All actions used to handle users
 */

import {
  USER_NEEDS_AUTH,
  AUTH_REFRESH_AUTH_TOKEN,
  AUTH_LOGOUT_USER_COMPLETE,
  AUTH_USER_ACCESS_GRANTED,
  AUTH_USER_REDIRECTED_FOR_AUTH,
  AUTH_IS_AUTHENTICATING
} from "./authActionTypes";
import { AUTH_MAIN_THREAD } from "../threads";

/**
 * Logout A user form the system
 */
export const LogoutUser = () => ({
  type: AUTH_LOGOUT_USER_COMPLETE,
});

export const userAccessGranted = (user) => ({
  type: AUTH_USER_ACCESS_GRANTED,
  mainThread: AUTH_MAIN_THREAD,
  user: user,
});

export const userAccessDenied = (user) => ({
  type: USER_NEEDS_AUTH,
  mainThread: AUTH_MAIN_THREAD,
  user: user,
});

export const RefreshToken = () => ({
  type: AUTH_REFRESH_AUTH_TOKEN,
  mainThread: AUTH_MAIN_THREAD,
});


/**
 *  Save the path or route the user was trying to access without access
 *   After the user has been granted access then they will be able to access all the content they need
 */
export const userRedirectedForAuth = (route) => ({
  type: AUTH_USER_REDIRECTED_FOR_AUTH,
  mainThread: AUTH_MAIN_THREAD,
  route: route
})

/**
 * If the user is logining or registering simply say that the user is authenticating
 */
export const isAuthenticating = () => ({
  type: AUTH_IS_AUTHENTICATING,
  data: 'started',
  mainThread: AUTH_MAIN_THREAD,
})

export const isAuthenticatingFinished = () => ({
  type: AUTH_IS_AUTHENTICATING,
  data: 'completed',
  mainThread: AUTH_MAIN_THREAD,
})