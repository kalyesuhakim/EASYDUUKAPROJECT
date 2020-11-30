import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**Material Ui Components */
import { ThemeProvider } from "@material-ui/core/styles";

/**Font faces */
// import "typeface-roboto";

/**Style sheets */
import "bootstrap/dist/css/bootstrap-grid.css";
import "../scss/app.scss";
import "animate.css";

/** import theme */
import theme from "./theme/admin-theme";

// import  from "./layout/MainWrapper";
import { Provider as ReduxProvider } from "react-redux";
import AdminDrawer from "./layout/AdminDrawer";
import AdminAppbar from "./layout/AdminAppbar";
import AdminMainWrapper from "./layout/AdminMainWrapper";
import AdminLinks from "./routes/adminLinks";
import InitializingAppLoader from "../global/components/initializer/InitializingAppLoader";
import AuthComponent from "../global/components/Auth/AuthComponent";
import Login from "./modules/Auth/Login";
import AlertNotifications from "../global/components/notifications/AlertNotifications";
import Clients from "./modules/Clients";
import store from "../global/store";
import AbmFoodOutreach from "./modules/AbmFoodOutreach.js";
import { ApolloProvider } from "@apollo/client";
import Billing from "./modules/Billing";
import graphClient from "../global/store/graphql/graphClient";

function AdminRouting() {
  /**
   * isInitializing has three states,
   * 0 when compoenent has just mounted
   * 1 check  authStatus is loading
   * 2 check last activity is loading
   * 3 all is completed and application is ready for use
   *
   */
  const [isInitializing, setInitializationState] = useState(0);

  if (isInitializing !== 3) {
    return (
      <ReduxProvider store={store}>
        <InitializingAppLoader
          isInitializing={isInitializing}
          setInitializationState={setInitializationState}
        />
      </ReduxProvider>
    );
  }

  if (isInitializing === 3)
    return (
      <ReduxProvider store={store}>
        <ApolloProvider client={graphClient}>
          <ThemeProvider theme={theme}>
            <Router>
              <AlertNotifications />
              <AuthComponent>
                // authenticated={
                  <AdminMainWrapper
                    appbar={<AdminAppbar />}
                    drawer={<AdminDrawer />}
                  >
                    <Switch>
                      <Route
                        path={AdminLinks.forms.food_out_reach.path}
                        render={(props) => <AbmFoodOutreach {...props} />}
                      />
                      <Route
                        path={AdminLinks.clients.path}
                        render={(props) => <Clients {...props} />}
                      />
                      <Route
                        path={AdminLinks.billing.path}
                        render={(props) => <Billing {...props} />}
                      />
                      <Route
                        path={AdminLinks.apis.path}
                        render={(props) => <AdminLinks.apis.Component {...props} />}
                      />
                      <Route
                        path={AdminLinks.dashboard.path}
                        render={(props) => <div>The admin dashboard</div>}
                      />

                      <Route
                        path={AdminLinks.settings.path}
                        render={(props) => <div>The admin dashboard</div>}
                      />
                    </Switch>
                  </AdminMainWrapper>
                }
              {/* >
                <Switch>
                  <Route>
                    <Login />
                  </Route>
                </Switch> */}
              </AuthComponent>
            </Router>
          </ThemeProvider>
        </ApolloProvider>
      </ReduxProvider>
    );

  return <div></div>;
}
export default AdminRouting;
