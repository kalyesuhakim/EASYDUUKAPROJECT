import React from 'react';
import { connect } from 'react-redux';
import authenticateUserHook from './authHooks/authenticateUserHook';
import { RedirectAfterAuth } from './authHooks/redirectAfterAuth';
import { getAuthStatusHook } from './authHooks/getAuthStatusHook';

/**
 * 
 * Auth conector to check if user is authenticated or not 
 * Once the user is authenicated then the app will have access to protected routes
 */

 const mapStateToAuth = (state, ownProps) => ({
     auth: state.auth,
     ...ownProps,
 });

 const mapDispatchToAuth = (dispatch, ownProps) => ({
     dispatch,
     ...ownProps,
     login: authenticateUserHook(),
     logout: dispatch,
     redirectAfterAuthService: RedirectAfterAuth(dispatch),
     getAuthStatus: getAuthStatusHook(dispatch)

 })


 export const authService = connect(mapStateToAuth, mapDispatchToAuth);