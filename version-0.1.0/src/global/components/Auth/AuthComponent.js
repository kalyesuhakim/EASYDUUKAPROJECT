import React from 'react'
import PropTypes from 'prop-types';
import { authService } from '../../store/services/authService';


/**
 * AuthComponent
 * Takes in two components the components that it shows once authenticated and 
 * the component it shows once authentication has been a success
 */

function AuthComponent_(props){

    const {auth, authenticated} = props;

    if(auth.authenticated){
        return <React.Fragment>{authenticated}</React.Fragment>;
    }

    return <React.Fragment>{props.children}</React.Fragment>;

}

AuthComponent_.propTypes = {
    authenticated: PropTypes.any,
}

const AuthComponent = authService(AuthComponent_);

export default AuthComponent;
