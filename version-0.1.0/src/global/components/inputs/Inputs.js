import React from "react";
import { uuid } from "uuidv4";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";
import { borderBottom } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginBottom: "10px",
    position: "relative",
    "& .MuiSvgIcon-root": {
      color: grey[600],
    },
    "&:focus-within .startIcon, &:focus-within label": {
      color: theme.palette.primary.main,
      transition: "0.3s ease",
      "& .MuiSvgIcon-root": {
        color: theme.palette.primary.main,
      },
    },
    "& *": {
      ...theme.typography.body1,
    },
  },

  input: {
    ...theme.typography.fontFamily,
    fontSize: "14px",
    width: "100%",
    height: "35px",
    border: "solid 1px " + grey[500],
    borderRadius: "20px",
    padding: "20px",
    paddingLeft: "37px",
    transition: "0.3s ease",
    "& .no-start-icon": {
      paddingLeft: '10px',
    },
    "&:focus, &:active, &:hover": {
      outline: "none",
      paddingLeft: "37px",
      border: "solid 1px " + theme.palette.primary.main,
      transition: "0.3s ease",
      boxShadow: theme.shadows[4],
    },
    "&.line": {
      border: "none",
      borderRadius: "0px!important",
      background: "transparent!important",
      borderBottom: "solid 1px" + grey[500],
      "&:focus, &:active, &:hover": {
        paddingLeft: "37px",
        border: "none",
        borderBottom: "solid 1px" + theme.palette.primary.main,
      },
    },
  },

  errorInput: {
    borderColor: theme.palette.error.dark,
  },
  errorText: {
    color: theme.palette.error.dark,
  },
  noStartIcon: {
    paddingLeft: "20px",
  },

  startIcon: {
    position: "absolute",
    height: "100%",
    top: "0px",
    left: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "34px",
    color: theme.palette.primary.main,
  },
  inputWrapper: {
    position: "relative",
    marginTop: "5px",
  },
  label: {
    paddingLeft: "5px",
    fontSize: "14px",
    marginBottom: "10px",
    width: "100%",
    fontWeight: 600,
  },
  inputCodesWrapper: {
    width: "auto",
    display: "flex",
  },
  codeInput: {
    width: "20px",
    outline: "none",
    border: "none",
    borderBottom: `solid 1px ${grey[700]}`,
    marginLeft: "5px",
    marginRight: "5px",
  },
  square: {
    borderRadius: "0px",
  },
  multiline: {
    height: "auto!important",
    resize: "none",
  },
  helperText: {
    // paddingTop: '10px',
    color: theme.palette.warning.main,
    fontSize: "13px !important",
    "& *": {
      fontSize: "13px !important",
    },
  },
}));

export function KijjeInput(props) {
  const uid = uuid();
  const classes = useStyles();
  const variant = props.variant || "";

  // remove the padding for the start
  const inputClass =
    typeof props.startIcon == "null" ||
    typeof props.startIcon == "undefined" ||
    typeof props.startIcon == false
      ? classes.noStartIcon +
          " " +
          classes.input +
          
          " no-start-icon " +
          props.className || " "
      : classes.input + " " + props.className || " ";


  const multiline = props.multiline || false;

  return (
    <div {...props} className={classes.root}>
      {props.label ? (
        <label className={classes.label} htmlFor={uid}>
          <span>{props.label}</span>
        </label>
      ) : (
        ""
      )}
      <div className={classes.inputWrapper}>
        {props.startIcon ? (
          <div className={classes.startIcon + " startIcon"}>
            {props.startIcon}
          </div>
        ) : (
          ""
        )}

        {multiline !== false ? (
          <textarea
            id={uid}
            placeholder={props.placeholder}
            {...props}
            className={clsx(
              props.square
                ? inputClass + " " + variant + " " + classes.multiline + " " + classes.square
                : inputClass + " " + variant + " " + classes.multiline,
              props.error === true ? classes.errorInput : ""
            )}
          ></textarea>
        ) : (
          <input
            id={uid}
            placeholder={props.placeholder}
            {...props}
            className={
              props.square
                ? inputClass + " " + variant + " " + classes.square
                : inputClass + " " + variant + " "
            }
          />
        )}
      </div>
      <div
        className={clsx(
          classes.helperText,
          props.error ? classes.errorText : "",
          "pt-1"
        )}
      >
        {props.helperText ? <p className="mt-1">{props.helperText}</p> : ""}
      </div>
    </div>
  );
}

KijjeInput.propTypes = {
  startIcon: PropTypes.string,
  square: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
};

export function KijjeCodeInput(props) {
  const classes = useStyles(props);
  var inputList = [];
  for (var i = 0; i < props.codes; i++) {
    inputList.push(i);
  }

  return (
    <div className={classes.root}>
      <div className={classes.inputCodesWrapper}>
        {inputList.map((item, index) => (
          <input className={classes.codeInput} key={index} />
        ))}
      </div>
    </div>
  );
}

KijjeCodeInput.propTypes = {
  codes: PropTypes.number.isRequired,
};
