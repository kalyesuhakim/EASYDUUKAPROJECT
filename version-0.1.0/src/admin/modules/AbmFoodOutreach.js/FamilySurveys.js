import {
  Avatar,
    Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { MoreHoriz } from "@material-ui/icons";
import React from "react";
import DataTable from "../../../global/components/charts/DataTable";
import clsx from "clsx";

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const query = gql`
  query allFamilies {
    allFamilies {
      id
      survey_id
      first_born_age
      name_father
      name_mother
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default function FamilySurveys(props) {
  const classes = useStyles();

  const { loading, data, error } = useQuery(query);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <div>There was some error encounterd</div>;
  }

  console.log(data.allFamilies);

  const columns = [
    //   {
    //     field: "family_photo",
    //     title: "Avatar",
    //     render: (props) => <Avatar {...props}></Avatar>,
    //   },
    {
      field: "name_father",
      title: "Name",
    },
    {
      field: "name_mother",
      title: "Name",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <List dense>
          {data.allFamilies.map((family, index) => (
            <React.Fragment>
              <ListItem key={index}>
                <ListItemIcon>{family.id}</ListItemIcon>
                <ListItemText>
                  <b>Family {family.id}</b> {family.name_mother}
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}
