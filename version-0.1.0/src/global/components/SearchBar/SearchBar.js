import React, { useState } from "react";
import {
  Paper,
  makeStyles,
  IconButton,
  Menu,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
} from "@material-ui/core";
import { Search, Close, ShoppingBasket } from "@material-ui/icons";
import { orange, grey } from "@material-ui/core/colors";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import MicrosoftLoader from "../loader/MicrsoftLoader";

const endIconWidth = 30;
const startIconWidth = 30;

const useStyles = makeStyles((theme) => ({
  rootInactive: {
    width: "100%",
    minWidth: "150px",
    paddingRight: "0px",
    position: "relative",
    height: "50px",
    borderRadius: "10px",
    boxShadow: theme.boxShadows[0],
    backgroundColor: grey[50],
    borderRadius: "30px",

    /**
     * With border-radius
     */
    [theme.breakpoints.down("sm")]: {
      borderRadius: "30px",
    },
  },
  rootActive: {
    width: "100%",
    minWidth: "150px",
    paddingRight: "0px",
    height: "50px",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      right: "0px",
      left: "0px",
      top: "0px",
      bottom: "0px",
      height: "100vh",
      minWidth: "100vw",
      minHeight: "100%",
      width: "100%",
      padding: "10px",
      zIndex: theme.zIndex.modal,
      "& .active-input": {
        background: grey[100],
        borderRadius: "30px",
      },
    },
  },
  innerRoot: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:-moz-focus-inner, &:focus-within": {
      backgroundColor: `red`,
    },
  },
  searchInputWrapper: {
    padding: "10px",
    width: "100%",
    height: "100%",
    background: "transparent",
    display: "flex",

  },
  searchInput: {
    ...theme.typography.body1,
    width: "100%",
    height: "100%",
    background: "transparent",
    color: theme.palette.primary.main,
    border: "none",
    outline: "none",
    transition: "0.5s ease",
    fontSize: "12px",
    "&:focus": {
      ...theme.typography.body1,
      border: "none",
      outline: "none",
      transition: "0.5s ease",
    },
    "&*": {
      color: theme.palette.primary.main,
    },
    "&::placeholder": {
      color: theme.palette.secondary.main,
    },
  },
  searchBtnWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    height: "100%",
    width: "40px",
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "0.3s ease",
    "&:hover": {
      backgroundColor: orange[400],
      transition: "0.3s ease",
    },
  },
  /**
   * Search results styles
   */
  searchResultsTarget: {
    background: grey[50],
    boxShadow: theme.boxShadows[2],
    [theme.breakpoints.down("sm")]: {},
  },
  searchResultsRoot: {
    ...theme.typography.body1,

    position: "absolute",
    width: "100%",
    zIndex: theme.zIndex.modal * 10,
  },
  resultsWrapper: {
    padding: theme.spacing(1),
    paddingTop: "0px",
    position: "relative",
    height: "70vh",
    overflowY: "auto",
    msOverflowY: "auto!important",
  },
  startIcon: {
    width: `${endIconWidth}px`,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  endIcon: {
    width: `${endIconWidth}px`,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  /**
   * Category Results Groupings
   */
  catResGroupingRoot: {
    padding: theme.spacing(2),
    "& .carousel .slide": {
      background: "transparent",
    },
  },
  catResGrpRowRoot: {},
  catResGrpRowCard: {
    padding: "20px",
    backgroundColor: theme.palette.primary.light,
  },
  /**
   * Search Results Item
   */
  searchResultsItemRoot: {
    width: "100%",
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  const onBlurShadow = props.onBlurShadow || 1;

  const [state, setState] = useState({
    menuEl: false,
    open: false,
    value: "",
  });
  const onSearchChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      menuEl: e.target,
      value: value,
    });
  };
  /**
   * Cancel the search when the user clicks on the close icon
   */
  const cancelSearch = (e) => {
    setState({
      ...state,
      value: "",
    });
  };

  if (state.value.length > 0) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
  return (
    <Paper
      square
      className={
        state.value.length > 0
          ? classes.rootActive + " animated fadeIn"
          : classes.rootInactive + " animated fadeIn"
      }
      elevation={state.value.length > 0 ? 2 : onBlurShadow}
    >
      <div className={classes.innerRoot + " active-input"}>
        <div className={classes.searchInputWrapper}>
          <div className={classes.startIcon}>
            <Search color="inherit" />
          </div>
          <input
            value={state.value}
            onChange={onSearchChange}
            className={classes.searchInput}
            placeholder={props.placeholder || "Search here..."}
          />
          {state.value.length > 0 ? (
            <IconButton
              onClick={cancelSearch}
              size="small"
              className={classes.endIcon}
            >
              <Close />
            </IconButton>
          ) : (
            ""
          )}
        </div>
      </div>
      {state.value.length > 0 ? (
        <Paper elevation={0} square className={classes.searchResultsTarget}>
          {/* <Divider /> */}
          <div className="mt-2 mb-2">
            <MicrosoftLoader />
          </div>
          {/* <CategoryResultsGrouping /> */}
          <SearchResults list={[1, 2, 3, 4]} />
        </Paper>
      ) : (
        ""
      )}
    </Paper>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.any,

}

/**
 *  Results View or Wrapper Component
 */
function SearchResults(props) {
  const classes = useStyles();
  const list = props.list || [];
  return (
    <div className={classes.searchResultRoot}>
      <div className={classes.resultsWrapper}>
        <List>
          {list.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemAvatar>
                  <ShoppingBasket />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography noWrap className={classes.resItemTitle}>
                      Real Estate
                    </Typography>
                  }
                  secondary={<Typography>$12 ...</Typography>}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
}

function SearchResultItem(props) {
  const classes = useStyles();
  return <div className={classes.searchResultsItemRoot}></div>;
}

/**
 * View | Display of category results
 * @keyword catResGrouping means Category Results Grouping
 */
function CategoryResultsGrouping(props) {
  const classes = useStyles();
  return (
    <div className={classes.catResGroupingRoot}>
      <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
        <CatResGroupingRow items={[1, 2, 3, 4]} />
        <CatResGroupingRow items={[5, 6, 7, 8]} />
        <CatResGroupingRow items={[13, 12, 11, 10]} />
      </Carousel>
    </div>
  );
}

/**
 * List | Row for categories
 * cat will mean categories
 */

function CatResGroupingRow(props) {
  const classes = useStyles();
  const items = props.items || [];
  return (
    <Grid
      container
      justify="center"
      spacing={2}
      className={classes.catResGrpRowRoot}
    >
      {items.map((cat, index) => (
        <Grid item xs={3} key={index}>
          <Paper className={classes.catResGrpRowCard}>{cat}</Paper>
        </Grid>
      ))}
    </Grid>
  );
}

CatResGroupingRow.propTypes = {
  items: PropTypes.array,
};
