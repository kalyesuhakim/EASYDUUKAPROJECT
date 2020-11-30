import React from 'react';
import { authService } from '../../store/services/authService';
import { Route, Redirect } from 'react-router-dom';
import { mappedLinks } from '../../maps';


function AuthRoute_(props){
    const {auth} = props;

    if(auth.authenticated){
        return <Redirect to={mappedLinks.landing.home.path} />
    }
    return <Route {...props} />
}

const AuthRoute = authService(AuthRoute_);
export default AuthRoute;