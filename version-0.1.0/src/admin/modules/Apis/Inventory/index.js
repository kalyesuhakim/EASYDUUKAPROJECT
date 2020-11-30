
/**
 * 1. Add fields to the scripts property in the package.json file
 * "packages": "vue-cli-service build --target lib --name main src/components/index.js"
 * 2. Add the return value to the configureWebpack property in the vue.config.js file
 * const output = {
      libraryTarget: "window"
    };
    module.exports = {
      configureWebpack: (config) => {
        return {
          output
        };
      }
    };
*/
import React from "react";
import adminLinks from "../../../routes/adminLinks";
import { Switch, Route } from "react-router-dom";
import BreadCrumbNav from "../../../../global/components/navigation/BreadCrumbNav";
import InventoryMain from "./InventoryMain";

export default function Inventory(props) {
  const { Module } = props;
  const subModules = Module.subModules || [];
  console.log("here are the sub ...", Module.path);
  return (
    <React.Fragment>
      <BreadCrumbNav root={Module} />
      <Switch>
        {subModules.map(({ path, Component }, index) => {
          return (
            <Route path={path} render={(props) => <Component {...props} />} />
          );
        })}
        <Route
          path={Module.path}
          render={(props) => <InventoryMain {...props} />}
        />
      </Switch>
    </React.Fragment>
  );
}
