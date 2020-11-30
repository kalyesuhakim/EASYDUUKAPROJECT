import { Grid } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import BreadCrumbNav from "../../../global/components/navigation/BreadCrumbNav";
import adminLinks from "../../routes/adminLinks";
import Packages from "./Packages";
import Services from "./Services";

export default function Billing(props) {
  const Billing = adminLinks.billing;
  const subModules = "subModules" in Billing ? Billing.subModules : [];

  return (
    <Grid container>
      <Grid item xs={12}>
        <BreadCrumbNav root={Billing} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Switch>
          {subModules.map(({ Component, path }, index) => (
            <Route path={path} render={(props) => <Component {...props} />} />
          ))}
          {/* <Route
        path={Billing.path}
        render={(props) => <Billing.Component {...props} />}
      /> */}
        </Switch>
      </Grid>
      <Grid item xs={12} md={4}>

      </Grid>
    </Grid>
  );
}
