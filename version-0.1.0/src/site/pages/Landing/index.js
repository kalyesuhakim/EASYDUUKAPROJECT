import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from '../../../global/components/error_pages/PageNotFound';
import appLinks from '../../routes/appLinks';
import LandingMain from './LandingMain';


export default function Landing(props){
    return (
      <Switch>
        <Route
          exact
          path={appLinks.home.path}
          render={(props) => <LandingMain {...props} />}
        />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    );
}