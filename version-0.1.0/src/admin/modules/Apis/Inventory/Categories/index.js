import { Grid } from "@material-ui/core";
import React from "react";
import DashboardStatisticPane from "../../../../../global/components/dashboard/DashboardStatisticsPane";
import CategoriesToolbar from './CategoriesToolBar'
import CategoriesView from "./CategoriesView";
import CategoryAttributes from "./CategoryAttributes";
import CreateCategory from "./CreateCategory";

const statData = [
  {
    title: "Categories",
    value: "17"
  },
  {
    title: "Sub Categories",
    value: "6"
  },
  {
    title: "Deleted Categories",
    value: "0"
  },
  {
    title: "Un Verified",
    value: "0"
  }
]

const categories = [
  {
    name: "Smart Phones",
    isSubCategory: false,
    image: "",
  },
  {
    name: "Mobile Phones",
    isSubCategory: false,
    image: "",
  },
  {
    name: "Ladies Fashion",
    isSubCategory: false,
    image: "",
  },
  {
    name: "Mens Shoes",
    isSubCategory: false,
    image: "",
  },
];
export default function Categories(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <DashboardStatisticPane data={statData} />
        <CategoriesToolbar />
        <CategoriesView view="list" categories={categories} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <CreateCategory /> 
        <CategoryAttributes />
      </Grid>
    </Grid>
  );
}
