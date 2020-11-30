import React from 'react';
import { Route} from 'react-router-dom';
import { authService } from '../../store/services/authService';


/**
 * Protected route to present components that have been authenticated
 */
function ProtectedRoute_(props){
    const {authenticated} = props.auth;
    const Redirect = props.redirectAfterAuthService(props.path);
    if(authenticated === true){
        return (
            <Route {...props} />
        )
    }
    return <Redirect />;
}


const ProtectedRoute = authService(ProtectedRoute_);

export default ProtectedRoute;