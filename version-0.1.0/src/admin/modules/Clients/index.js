import React  from 'react';
import { Grid, GridList, Paper, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import adminLinks from '../../routes/adminLinks';
import ClientsMain from './ClientsMain';

const useStyles = makeStyles(theme => ({
  card: {
    padding: '20px',
    boxShadow: theme.boxShadows[2],
  }
}))
export default function Clients(props){
  const classes = useStyles();
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Switch>
            <Route path={adminLinks.clients.path} render={props => <ClientsMain {...props} />} />
          </Switch>
        </Grid>
        <Grid item xs={12} md={4}>
         
          <Paper className={classes.card}>
          </Paper>
        </Grid>
      </Grid>
    );
}