import {
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { green, orange, purple, red } from "@material-ui/core/colors";
import {
  ArrowForward,
  BookOutlined,
  CategoryOutlined,
  ContactSupport,
  Markunread,
  MenuOutlined,
  MoreVert,
  Store,
  StoreSharp,
} from "@material-ui/icons";
import React from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  inventoryCard: {
    height: "200px",
    boxShadow: theme.boxShadows[3],
    position: "relative",
  },
  cardTitle: {
    transform: "rotate(-90deg)",
    position: "relative",
    bottom: "0px",
    color: "white",
    width: "200px",
    height: "40px",
    position: "absolute",
    left: "-80px",
    top: "40%",
    fontSize: "17px",
    // [theme.breakpoints.down("xs")]: {
    //   left: "-22%",
    // },
    // [theme.breakpoints.down("lg")]: {
    //   left: "-27%",
    // },
  },
  cardBody: {
    padding: theme.spacing(2),
    width: "calc(100% - 40px)",
    marginLeft: "40px",
    height: "100%",
  },
  cardContent: {
    height: "calc(100% - 80px)",
    ["& .MuiListItem-root"]: {
      padding: "0px",
      fontSize: "10px",
    },
    ["& .MuiListItem-container  *"]: {
      fontSize: "12px!important",
    },
    ["& .MuiListItemText-root"]: {
      margin: "0px",
    },
  },
  cardFooter: {
    height: "40px",
  },
  w100: {
    width: "100%",
  },
}));

export default function InventoryDashboard(props) {
  const classes = useStyles();
  return (
    <Grid container className="mt-3">
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {[
            {
              moduleTitle: "Inventories",
              moduleIcon: <BookOutlined />,
              color: green[500],
            },
            {
              moduleTitle: "Active",
              moduleIcon: <CategoryOutlined />,
              color: orange[500],
            },
            {
              moduleTitle: "Deactivated",
              moduleIcon: <CategoryOutlined />,
              color: purple[500],
            },
          ].map((module, key) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Paper className={classes.inventoryCard}>
                <div
                  className={classes.cardTitle}
                  style={{ backgroundColor: module.color }}
                >
                  <div className="d-flex align-items-center p-1 pl-2">
                    {module.moduleIcon} &nbsp; {module.moduleTitle}{" "}
                  </div>
                </div>
                <div className={classes.cardBody}>
                  <div className={clsx("w-100 d-flex justify-content-end")}>
                    <IconButton>
                      <MoreVert />
                    </IconButton>
                  </div>

                  <div
                    className={clsx(
                      "d-flex align-items-end justify-content-start",
                      classes.cardContent
                    )}
                  >
                    <div className={classes.w100}>
                      <Typography variant="h3">100</Typography>
                      <List
                        subheader={
                          <Typography>
                            Recent Activity <Divider className="mb-1" />
                          </Typography>
                        }
                        className={classes.w100}
                      >
                        <ListItem>
                          <ListItemText>
                            <Typography noWrap>Beats On Andery</Typography>
                          </ListItemText>
                          <ListItemSecondaryAction>
                            <Typography noWrap>Added Today</Typography>
                          </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem>
                          <ListItemText>
                            <Typography noWrap>Beats On Andery</Typography>
                          </ListItemText>
                          <ListItemSecondaryAction>
                            <Typography noWrap>On Jan 12th</Typography>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </List>
                    </div>
                  </div>

                  <div
                    className={clsx(
                      "d-flex align-items-end justify-content-end",
                      classes.cardFooter
                    )}
                  >
                    <IconButton>
                      <ArrowForward />
                    </IconButton>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
