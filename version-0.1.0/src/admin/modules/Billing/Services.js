import {
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Add,
  Delete,
  Edit,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Publish,
} from "@material-ui/icons";
import React from "react";
import SearchBar from "../../../global/components/SearchBar/SearchBar";
import clsx from "clsx";
import DataTable from "../../../global/components/charts/DataTable";

const useStyles = makeStyles((theme) => ({}));
export default function Services(props) {
  const classes = useStyles();
  const columns = [
      {
          title: "Service",
          field: "service",          
      },
      {
          title: "Last Edited",
          field: "last_edited",
          type: "date"          
      },
      {
          title: "Action",
          field: "last_edited",
          type: "date"          
      }
  ]
  const data = [
      {
          service: "Website designing",
          last_edited: "12/jan/2020"
      }
  ]
  return (
    <Grid container justify="center">
     
      <Grid item xs={12}>
        <DataTable title="Services" columns={columns} data={data} />        
      </Grid>
    </Grid>
  );
}
