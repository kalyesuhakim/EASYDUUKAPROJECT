import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import appLinks from "./routes/appLinks";

/**Material Ui Components */
import { ThemeProvider } from "@material-ui/core/styles";

// import { Paper, Container, makeStyles } from "@material-ui/core";

/**Style sheets */
import "bootstrap/dist/css/bootstrap-grid.css";

// /**Font faces */
// import "typeface-roboto";

import "../scss/app.scss";

import "animate.css";

/** import theme */
import theme from "./theme/app-theme";
import { Provider } from "react-redux";
import Landing from "./pages/Landing";
// import { grey } from "@material-ui/core/colors";
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";
// import NetworkError from "./components/error_pages/NetworkError";
// import ProtectedRoute from "./components/Auth/ProtectedRoute";
// import { useEffect } from "react";
// import { useState } from "react";
// import InitializingAppLoader from "./components/initializer/InitializingAppLoader";
// import AuthRoute from "./components/Auth/AuthRoute";
// import AuthLoggingOutUser from "./components/Auth/AuthLoggingOutUser";
import store from '../global/store';
import MessageDialog from "../global/components/messages/MessageDialog";
import SiteAppbar from "../global/components/navigation/SiteAppbar";
import SiteFooter from "../global/components/navigation/SiteFooter";
import AlertNotifications from "../global/components/notifications/AlertNotifications";
import MainWrapper from "../global/components/warppers/MainWrapper";
import PageNotFound from "../global/components/error_pages/PageNotFound";

function SiteRouting(props) {

  /**
   * isInitializing has three states,
   * 0 when compoenent has just mounted
   * 1 check  authStatus is loading
   * 2 check last activity is loading
   * 3 all is completed and application is ready for use
   *
   */
  // const [isInitializing, setInitializationState] = useState(0);

  // if (isInitializing !== 3) {
  //   return (
  //     <Provider store={store}>
  //       <InitializingAppLoader
  //         isInitializing={isInitializing}
  //         setInitializationState={setInitializationState}
  //       />
  //     </Provider>
  //   );
  // }

  // if (isInitializing === 3)
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AlertNotifications />
          <Router>
            <MainWrapper appbar={<SiteAppbar />}>
              <Switch>
                <Route
                  path={appLinks.home.path}
                  render={(props) => <Landing {...props} />}
                />
                <Route>
                  <PageNotFound />
                </Route>
              </Switch>
              <MessageDialog />
            </MainWrapper>
            <SiteFooter />
          </Router>
        </ThemeProvider>
      </Provider>
    );
}
export default SiteRouting;
