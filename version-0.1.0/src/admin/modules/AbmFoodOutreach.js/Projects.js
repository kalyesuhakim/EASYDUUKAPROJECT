import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import adminLinks from "../../routes/adminLinks";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "200px",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column"
  },
}));

export default function Projects(props) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Route
          path={adminLinks.forms.projects.path}
          render={(props) => <AllProjects {...props} />}
        />
      </Grid>
    </Grid>
  );
}

function AllProjects(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {[1, 2, 2].map((project, index) => (
        <Grid item xs={6} sm={4} md={4} lg={2}>
          <Paper className={classes.paper}>
            <div>Project one</div>
            <Button variant="outlined">
                Manage
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
