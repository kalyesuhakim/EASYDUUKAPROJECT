import { IconButton, List, ListItem, Paper, Typography, ListItemText, Divider, ListItemSecondaryAction, ListItemIcon, Checkbox } from "@material-ui/core";
import { AddOutlined, Check, DeleteOutlined, EditOutlined } from "@material-ui/icons";
import React from "react";
import clsx from "clsx";
import NewCategoryAttribute from "./NewCategoryAttribute";
import SearchBar from "../../../../../global/components/SearchBar/SearchBar";

const attributes = [
    {
        name: "Weight",
        unit: "KG",
        type: "number"
    },
    {
        name: "Size",
        unit: "Length",
        type: "text"
    },
    
]

export default function CategoryAttributes(props) {
  return (
    <Paper className={clsx("mt-3")}>
      <div
        className={clsx(
          "d-flex justify-content-between w-100 align-items-center p-3 pb-0"
        )}
      >
        <Typography>
          <b>Category Attributes</b>
        </Typography>
        <NewCategoryAttribute />
      </div>
      <div className="pl-3 pr-3">
        <SearchBar placeholder="Lookup Attributes" />
      </div>

      <List disablePadding>
        {attributes.map(({ name }, index) => (
          <React.Fragment key={index}>
            <ListItem key={index}>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteOutlined />
                </IconButton>
                <IconButton>
                  <EditOutlined />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}
