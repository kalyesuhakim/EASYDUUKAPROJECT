import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminLinks from "../../routes/adminLinks";

export default function Apis(props) {
  const  Apis = AdminLinks.apis;
  const subModules = Apis.subModules || []
  return (
    <Switch>
      {/* <Route path={AdminLinks} render={(props) => <Apis.Component />} /> */}
      {subModules.map((Module, index) => {
          const {Component, path} = Module
          return <Route path={path} render={props => <Component {...props} Module={Module} />} />
      })}
    </Switch>
  );
}
