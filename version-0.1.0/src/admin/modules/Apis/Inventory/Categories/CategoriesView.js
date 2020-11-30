import {
    Collapse,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { Delete, Edit, KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const useStyles = makeStyles((theme) => ({
  listItem: {
    cursor: "pointer",
    transition: "0.3s ease",
    backgroundColor: theme.palette.common.white,
    marginTop: "10px",
    "&:hover": {
      transition: "0.3s ease",
      backgroundColor: orange[50],
    },
  },
}));

/**
 * Show Categories in a list fomart
 */
const ListView = (props) => {
  const classes = useStyles();
  const categories = props.categories;
  const [collapseList, setCollapseList] = useState({

  });
  const onCollapseChange = index => () => {
      setCollapseList({
          ...collapseList, 
          [index]: !collapseList[index],
      })
  }
  return (
    <List>
      {categories.map(({ name, isSubCategory, image }, index) => (
        <div className="w-100" key={index}>
          <ListItem key={index} className={classes.listItem} onClick={onCollapseChange(index)} >
            <ListItemAvatar src={image}>
              <LazyLoadImage src={image} />
            </ListItemAvatar>
            <ListItem secondary="Is Parent Category">{name}</ListItem>
            <ListItemSecondaryAction>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
              <IconButton onClick={onCollapseChange(index)}>
                {collapseList[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse in={collapseList[index]}>
              some content 
          </Collapse>
        </div>
      ))}
    </List>
  );
};

const GridView = (props) => {
  const classes = useStyles();
  const categories = props.categories;
  return (
    <Grid container>
      {categories.map(({ image, name, isSubCategory }, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Paper>
            <div className={classes.gridViewImageWrapper}>
              <LazyLoadImage src={image} />
            </div>
            <div></div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

const DetailView = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default function CategoriesView(props) {
  const view = props.view;

  switch (view) {
    case "list":
      return <ListView {...props} />;

    case "detail":
      return <DetailView />;

    default:
      return <GridView {...props} />;
  }
}
