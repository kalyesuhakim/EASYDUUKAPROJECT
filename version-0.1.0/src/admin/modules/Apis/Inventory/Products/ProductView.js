import React from "react";
import {
  Grid,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Delete, Edit } from "@material-ui/icons";
import { blue, blueGrey, green, red } from "@material-ui/core/colors";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  productGrid: {
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  productGridImageWrapper: {
    width: "100%",
    height: "200px",
    backgroundColor: theme.palette.common.white,
  },
  productGridList: {
    marginTop: "10px",
    padding: "20px",
    ...theme.typography.body1,
    listStyle: "none",
    margin: "0px",
    backgroundColor: blueGrey[50],
    ["& li"]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  absoluteButtons: {
    position: "absolute",
    right: "20px",
    top: "180px",
  },
  deleteButton: {
    boxShadow: "none",
    backgroundColor: red[400],
    color: theme.palette.common.white,
    ["&:hover"]: {
      backgroundColor: red[900],
    },
  },
  editButton: {
    backgroundColor: green[400],
    color: theme.palette.common.white,
    ["&:hover"]: {
      backgroundColor: green[900],
    },
  },
}));

 function GridView(props) {
  const products = props.products;
  const classes = useStyles();
  return (
    <Grid container spacing={3} className="mt-4">
      {products.map(
        (
          {
            name,
            category,
            image,
            price,
            stockNo,
            createdOn,
            updatedOn,
            description,
            details,
          },
          index
        ) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper variant="outlined" className={classes.productGrid}>
              <div className={classes.productGridImageWrapper}>
                <LazyLoadImage src={image} className={classes.productImage} />
              </div>
              <div className={classes.absoluteButtons}>
                <Fab
                  size="small"
                  color="primary"
                  className={clsx("mr-2", classes.editButton)}
                >
                  <Edit />
                </Fab>
                <Fab
                  size="small"
                  color="danger"
                  className={clsx("", classes.deleteButton)}
                >
                  <Delete />
                </Fab>
              </div>

              <ul className={classes.productGridList}>
                <li>
                  <span>Name:</span>
                  <span> {name}</span>
                </li>
                <li>
                  <span>Price:</span> <span>{price}</span>
                </li>
                <li>
                  <span>Category:</span>
                  <span>
                    <Typography noWrap>{category}</Typography>
                  </span>
                </li>
              </ul>
            </Paper>
          </Grid>
        )
      )}
    </Grid>
  );
}

function ListView(props) {
  return (
    <List>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText></ListItemText>
      </ListItem>
    </List>
  );
}

export function DetailView(props) {
  return (
    <Grid container>
      <Grid item></Grid>
    </Grid>
  );
}

export default function ProductView(props) {
  const view = props.view;
  switch (view) {
    case "list":
      return <ListView {...props} />;

    case "detail":
      return <DetailView {...props} />;

    default:
      return <GridView {...props} />;
  }
}
