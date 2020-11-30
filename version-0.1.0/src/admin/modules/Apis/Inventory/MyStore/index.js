import React from "react";
import { Avatar, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography } from "@material-ui/core";
import clsx from 'clsx';
import { Add, Edit, Notifications, Payment } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    card: {
        boxShadow: theme.boxShadows[3],
        padding: theme.spacing(3),
    }
}))

export default function MyStore(props) {
    const classes = useStyles()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          className={clsx(
            classes.card,
            "mt-3",
            "d-flex justify-content-between"
          )}
        >
          <div className="d-flex">
            <Avatar></Avatar>
            <div className="pl-3">
              <Typography>
                <b>Store Profile</b>
              </Typography>
              Mutima General Stores
            </div>
          </div>
          <Button endIcon={<Edit />}>Edit Details</Button>
        </Paper>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <ListItemText>
              <Typography>Payment Platforms</Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Notifications />
            </ListItemIcon>
            <ListItemText>
              <Typography>Notifications</Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton>
                <Edit />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        
      </Grid>
    </Grid>
  );
}
