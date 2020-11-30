import React from "react";
import { reqHook } from "./reqHook";
import requestPool from "../../../requests";
import { CircularProgress } from "@material-ui/core";
import { Redirect } from "react-router-dom";

/**
 *  Submit the request from the request pool.
 *  This will need to use the reqHook which will have all the states
 *  @param dispatch function
 * @return function @param
 */
export const reqBtnHook = (dispatch) => (
  button = {
    thread: "",
    addOnThread: "",
    endIcon: "",
    callbacks: {
      success: () => {},
      failure: () => {},
    },
    options: {
      addOnThread: "",
      endPoint: false,
    },
  }
) => {
  let { thread, endIcon, callbacks, options } = button;
  let data, state;

  if (typeof button.options === "undefined") {
    options = {
      addOnThread: "",
      endPoint: false,
    };
  }

  let addOnThread = options.addOnThread || "";
  let endPoint = options.endPoint;

  for (var req in requestPool) {
    if (requestPool[req].thread === thread) {
      thread = thread + addOnThread;
      dispatch((dispatch, getState) => {
        try {
          data = getState().req[thread].payload;
          state = getState().req[thread];
        } catch ($e) {
          console.log("There awas an error");
        }
      });
    }
  }

  if (typeof state === "undefined")
    throw new Error("State in reqBtnhook is undefiend");

  const { loading, comp_with_vr } = state;

  if (comp_with_vr === true) {
    return <Redirect to="/my-target-component" />;
  }
  return {
    onClick: () => {
      if (data === null) {
        return new Error("An error occured in reqBtn on thread " + thread);
      }
      if (thread === "") return new Error("Invalid request thread");
      reqHook(dispatch)(data, thread, callbacks, {
        ...options,
        addOnThread: addOnThread,
        endPoint: endPoint,
      });
      return reqBtnHook(dispatch)(button);
    },
    endIcon: loading ? <CircularProgress size="20px" /> : endIcon,
    disabled: loading,
  };
};
