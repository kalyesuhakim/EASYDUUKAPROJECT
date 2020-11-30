import { Button, Grid, makeStyles } from "@material-ui/core";
import { AddOutlined, Settings } from "@material-ui/icons";
import React from "react";
import DataTable from "../../../../../global/components/charts/DataTable";
import DashboardStatisticPane from "../../../../../global/components/dashboard/DashboardStatisticsPane";
import ProductsToolbar from "./ProductsToolBar";
import ProductView from "./ProductView";
import clsx from 'clsx';
import AddProduct from "./AddProduct";


const useStyles = makeStyles((theme) => ({
  roundButton: {
    ["&.MuiButton-contained"]: {
    },
  },
}));

const columns = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Category",
    field: "category",
  },
  {
    title: "Price",
    field: "price",
    type: "currency",
  },
  // {
  //     title: "Modal",
  //     field: "modal"
  // },
  {
    // This needs a custom component
    title: "Status",
    field: "status",
  },
  // {
  //     title: "Description",
  //     field: "description"
  // },
  {
    //Needs a custome component
    title: "Image",
    field: "image",
  },
  {
    title: "Added By",
    field: "addedBy",
  },
];

const data = [
  {
    image: "/images/image-1",
    inStock: 100,
    name: "Beats By Kenzo",
    category: "Beats",
    price: 10000,
    addedBy: "Lucky",
    approvedBy: "Lucky",
    status: "Available",
  },
];

const statData = [
  {
    title: "Products",
    value: "2000",
  },
  {
    title: "Recently added",
    value: "50",
  },
  {
    title: "Out of Stock",
    value: "100",
  },
  {
    title: "Deleted",
    value: "60",
  },
];

const product = {
  name: "Sumsung A11",
  category: "Smart Phones",
  image: "/images/products/838 portable speaker.png",
  price: "6700000",
  stockNo: "1827",
  id: "102",
  createdOn: "",
  updatedOn: "",
  description:
    "Sumsung Smaret phone that has the best content in the world and will be the most incredible product ever",
  details: [],
};
const products = [
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
  product,
];
export default function Products(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={8}>
        <DashboardStatisticPane data={statData} />
        <ProductsToolbar />
        <ProductView view="grid" products={products} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <div className="w-100 d-flex">
          <AddProduct />
          <Button
            endIcon={<Settings />}
            className={clsx("ml-2", classes.roundButton)}
            variant="contained"
            color="primary"
          >
            Add Attribute
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
