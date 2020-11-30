import React from "react";
import { Paper, IconButton, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import propTypes from "prop-types";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({

  /**
   * Dialog Card componet
   */
  dialogCardRoot: {
    background: `rgba(255, 255, 255, 0.8)`,
    borderRadius: "15px",
    // height: '80vh',
    // overflow: 'hidden',
    // overflowY: 'auto',
  },
  dialogCardHeader: {
    padding: "20px",
    position: 'sticky',
    top: '0px'

  },
  dialogTitle: {
    fontSize: "20px",
    fontWeight: 500,

  },
  dialogCardContent: {
    width: "100%",
    minHeight: "200px",
    padding: "25px",
    paddingTop: "0px",
  },
  fixedDialogContent: {
      height: '500px',
      width: '100%',
      overflow: 'hidden',
      overflowY: 'auto',
  }
}));


export default function DialogCard(props) {
  const title = props.title || "Title";
  const onClose = props.onClose;
  const classes = useStyles();
  const fixed = props.fixed || false;
  return (
    <Paper elevation={0} className={classes.dialogCardRoot}>
      <div
        className={clsx(
          "w-100 d-flex justify-content-between",
          classes.dialogCardHeader
        )}
      >
        <div className={classes.dialogTitle}>{title}</div>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </div>
      <div className={clsx(classes.dialogCardContent, fixed === true ? classes.fixedDialogContent : "")}>{props.children}</div>
      <div className={classes.dialogCardFooter}>{props.footer}</div>
    </Paper>
  );
}

DialogCard.propTypes = {
  title: propTypes.any.isRequired,
  onClose: propTypes.func.isRequired,
  footer: propTypes.any,
  
};
