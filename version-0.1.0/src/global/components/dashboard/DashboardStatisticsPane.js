import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  statPanel: {
    width: "100%",
    height: "150px",
    background: grey[100],
    // position: "absolute",

  },
  statPanelHeader: {
    ...theme.typography.body1,
    height: "40px",
    userSelect: "none",
    cursor: "pointer",
    width: "100%",
    textAlign: "right",
    padding: "15px 20px",
    fontWeight: 400,
    color: blueGrey[500],
  },
  statPanelFooter: {
    ...theme.typography.h3,
    height: "110px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    color: theme.palette.primary.main,
    fontWeight: 300,
  },
  subBody: {
    fontSize: "15px",
  },
  statPanelWrapper: {
    position: "relative",
  }
}));

const Panel = (props) => {
  const classes = useStyles();
  return (
    <Paper
      square
      elevation={1}
      variant="outlined"
      className={classes.statPanel}
    >
      <div className={classes.statPanelHeader}>{props.header}</div>
      <div className={classes.statPanelFooter}>
        <div>
          {props.children}{" "}
          <span className={classes.subBody}>{props.subBody}</span>
        </div>
      </div>
    </Paper>
  );
};

export default function DashboardStatisticPane(props) {
  const data = props.data || [];
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {data.map(({ title, value, link }, index) => (
        <Grid item xs={12} md={3} key={index} className={classes.statPanelWrapper}>
          <Panel header={title} subBody="">
            {value}
          </Panel>
          {/* <div style={{background: 'yellow', position: "absolute", width: "100px", height: "200px"}} className={classes.percentageColor}></div> */}
        </Grid>
      ))}
    </Grid>
  );
}
