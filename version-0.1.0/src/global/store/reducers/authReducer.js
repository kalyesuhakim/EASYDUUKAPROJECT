import { USER_NEEDS_AUTH, AUTH_LOGIN_USER_COMPLETE, AUTH_REFRESH_AUTH_TOKEN, AUTH_USER_ACCESS_GRANTED, AUTH_USER_REDIRECTED_FOR_AUTH, AUTH_IS_AUTHENTICATING, AUTH_LOGOUT_USER } from "../actions/authActionTypes";

const initialState = {
    authenticated: false,
    user: {},
    access_token: "",
    expires_in: "",
    payload: {},
    refresh_token: "",
    token_type: "",
    redirect_to: false,
    isAuthenticating: false,

}

export const authReducer = (MAIN_THREAD = null) => (state = initialState, action) =>  {
    let  _state = {...state};
    _state['change-thread' + action.type] = action.type + action.data;

    switch (action.type) {
        case USER_NEEDS_AUTH:
            return state;

        case AUTH_USER_ACCESS_GRANTED:
            return {..._state, ...action.user, ['authenticated']: true}

        case AUTH_USER_REDIRECTED_FOR_AUTH: 
            return {..._state, ['redirect_to']: action.route}

        case AUTH_IS_AUTHENTICATING:
            return {..._state, ['isAuthenticating']: action.data};

        case AUTH_LOGOUT_USER: 
            return {...state, ['isLoggingOutUser']: action.data}
        default:
            return state;
    }
}