import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { AddOutlined, ArrowForward, Close } from "@material-ui/icons";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { KijjeInput } from "../../../../../global/components/inputs/Inputs";
import Images from "../../../../../site/images/images";
import clsx from "clsx";
import { Skeleton } from "@material-ui/lab";
import { blueGrey, grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  roundButton: {
    borderRadius: "20px!important",
  },
  root: {
    minHeight: "400px",
  },
  prodImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",

  },
  dialogTitle: {
    boxShadow: theme.boxShadows[3],
  },
  dialogFooter: {
    background: grey[50],
  },
  sliderImageWrapper: {
    width: "100%",
    height: "90px",
    backgroundColor: blueGrey[50],
  },
  prodImageWrapper: {
    width: "100%",
    height: "223px",
    backgroundColor: blueGrey[50],
  },
}));

export default function AddProduct(props) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const onDialogChange = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <React.Fragment>
      <Button
        endIcon={<AddOutlined />}
        variant="outlined"
        className={classes.roundButton}
        color="secondary"
        onClick={onDialogChange}
      >
        Add Product
      </Button>
      <Dialog
        maxWidth="md"
        fullWidth
        minWidth="lg"
        open={openDialog}
        onBackdropClick={onDialogChange}
        onClose={setOpenDialog}
      >
        <DialogTitle className={classes.dialogTitle}>
          <div
            className={clsx(
              "d-flex justify-content-between align-items-center w-100"
            )}
          >
            <b>Add Product</b>
            <IconButton onClick={onDialogChange}>
              <Close />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className={classes.root}>
          <Grid container spacing={3} className={clsx("mt-4")}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography className="mb-2">
                    <b>Default Image</b>
                  </Typography>
                  <div className={classes.prodImageWrapper}>
                    <LazyLoadImage
                      placeholder={
                        <Skeleton variant="rect" width="100%" height="100%" />
                      }
                      src={Images.about.intro}
                      className={classes.prodImage}
                    />
                  </div>
                  <Button
                    fullWidth
                    size="small"
                    variant="outlined"
                    className="mt-1"
                  >
                    Choose Default Image
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography className="mb-2">
                    <b>Other Images</b>
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <div className={classes.sliderImageWrapper}>
                        <LazyLoadImage
                          placeholder={
                            <Skeleton
                              variant="rect"
                              width="100%"
                              height="100%"
                            />
                          }
                          src={Images.about.intro}
                          className={classes.prodImage}
                        />
                      </div>
                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        className="mt-1"
                        size="small"
                      >
                        Choose
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className={classes.sliderImageWrapper}>
                        <LazyLoadImage
                          placeholder={
                            <Skeleton
                              variant="rect"
                              width="100%"
                              height="100%"
                            />
                          }
                          src={Images.about.intro}
                          className={classes.prodImage}
                        />
                      </div>
                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        className="mt-1"
                        size="small"
                      >
                        Choose
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className={classes.sliderImageWrapper}>
                        <LazyLoadImage
                          placeholder={
                            <Skeleton
                              variant="rect"
                              width="100%"
                              height="100%"
                            />
                          }
                          src={Images.about.intro}
                          className={classes.prodImage}
                        />
                      </div>
                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        className="mt-1"
                        size="small"
                      >
                        Choose
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className={classes.sliderImageWrapper}>
                        <LazyLoadImage
                          placeholder={
                            <Skeleton
                              variant="rect"
                              width="100%"
                              height="100%"
                            />
                          }
                          src={Images.about.intro}
                          className={classes.prodImage}
                        />
                      </div>
                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        className="mt-1"
                        size="small"
                      >
                        Choose
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                fullWidth
                size="small"
                variant="outlined"
                className="mt-3"
                color="secondary"
              >
                Upload Images
              </Button>

              <KijjeInput
                variant="line"
                label="Description"
                multiline
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography>Select Category</Typography>
              <Select
                fullWidth
                label="Book Format"
                size="small"
                //   variant=""
                value="Select Category"
                name="format"
              >
                <MenuItem>Smart Phones</MenuItem>
                <MenuItem>Men's Fashion</MenuItem>
              </Select>
              <br />
              <KijjeInput variant="line" name="productName" label="Name" />
              <KijjeInput variant="line" name="" label="Price" />
              <KijjeInput variant="line" label="In Stock" />
              <KijjeInput variant="line" label="Modal" />
              <KijjeInput variant="line" label="Stock Number" />

              <KijjeInput variant="line" label="Approved" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.dialogFooter}>
          <Button variant="outlined" color="secondary" className="mr-2">
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForward />}
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
