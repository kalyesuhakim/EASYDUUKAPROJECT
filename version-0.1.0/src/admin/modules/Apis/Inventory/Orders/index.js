import React from "react";
import { Grid, Paper } from "@material-ui/core";
import OrdersList from "./OrdersList";
import OrdersToolBar from "./OrdersToolBar";
import DashboardStatisticPane from "../../../../../global/components/dashboard/DashboardStatisticsPane";


const ordersStatisticsData = [
    {
        title: "Orders",
        value: "200",
        link: "",
    },
    {
        title: "Pending Orders",
        value: "100",
        link: "",
    },
    {
        title: "Confirmed Orders",
        value: "50",
    },
    {
        title: "Completed Orders",
        value: "50",
        link: "",
    }
]

export default function Orders(props) {
  return (
    <Grid container className="mt-3">
      <Grid item xs={12} lg={8}>
        <Grid container>
          <Grid item xs={12}>
            <DashboardStatisticPane data={ordersStatisticsData} />
          </Grid>
          <Grid item xs={12} className="mt-3">
            <OrdersToolBar />
            <OrdersList />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Paper>
            
        </Paper>
      </Grid>
    </Grid>
  );
}
