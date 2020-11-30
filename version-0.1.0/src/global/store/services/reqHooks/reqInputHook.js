import { onReqInputChange, initializeReqs } from "../../actions/reqActions";
import requestPool from "../../../requests";
import { REQ_INPUT_CHANGE } from "../../actions/reqActiontTypes";

/**
 *  Handle all inputs for authentication, this will
 *  fire all the validation errors associated with a particular input if its
 *  authentication
 */
export const reqInputHook = (dispatch, state) => (
  input = {
    thread: "",
    name: "",
    defaultValue: "",
    addOnThread: "",
  },
  ...other
) => {
  let { name, thread, defaultValue, mainThread } = input;
  let reqState;
  let field_error = input.field_error || "";
  let helperText = input.helperText || "";

  var initialState = {};
  var initialPayload = {};

  let addOnThread = input.addOnThread || "";

  dispatch((dispatch, getState) => {
    state = getState();
    reqState = state.req;

    for (var request in requestPool) {
      const reqThread = requestPool[request].thread;
      if (thread === reqThread) {
        //the thread that the request is attached to
        if (reqThread + addOnThread in reqState) {
          if (name in reqState[reqThread + addOnThread].payload) {
            if (
              reqState[reqThread + addOnThread].payload[name] === "" &&
              defaultValue !== "" &&
              reqState[reqThread + addOnThread].lock !== true
            ) {
              initialPayload = {
                ...reqState[reqThread + addOnThread],
                payload: {
                  ...reqState[thread + addOnThread].payload,
                  [name]: defaultValue,
                },
              };
              dispatch(initializeReqs(initialPayload, thread + addOnThread));
            }
          }
          continue;
        } else {
          var payloadKeys = Object.keys(requestPool[request].payload);
          // walk through all keying in the object and have proper results
          payloadKeys.forEach((key) => {
            if (key.toString() == name.toString()) {
              //initial payload of the content or the inputs
              initialPayload = { ...initialPayload, [key]: defaultValue };
            } else {
              initialPayload = { ...initialPayload, [key]: "" };
            }
          });
          initialState = { payload: initialPayload };
          dispatch(initializeReqs(initialState, thread + addOnThread));
        }
      }
    }
  });

  // Check is the field has been registered to state, and if not please return the default value

  var value =
    thread + addOnThread in reqState
      ? name in reqState[thread + addOnThread].payload
        ? reqState[thread + addOnThread].payload[name]
        : defaultValue
      : defaultValue;

  // get the request events that are fired each time;
  var loading =
    thread + addOnThread in reqState
      ? "loading" in reqState[thread + addOnThread]
        ? reqState[thread + addOnThread].loading
        : false
      : false;

  var errors = [];

  if (thread + addOnThread in reqState) {
    errors = reqState[thread + addOnThread].errors || {};
  }

  try {
    for (var key in errors) {
      var field = key.split(".")[0];
      if (field === name) {
        helperText = errors[key];
        field_error = true;
      }
    }
  } catch ($exception) {}

  // input object will all required props to update and work properly
  return {
    name: name,
    onChange: (e) => {
      if (loading !== true) {
        dispatch({
          type: REQ_INPUT_CHANGE,
          // data: e.target.type == "number" ?  Number(e.target.value) : e.target.value,
          data: e.target.value,
          name: name,
          thread: thread + addOnThread,
        });
      }
    },
    value,
    disabled: loading,
    thread: thread,
    addOnThread: addOnThread,
    error: field_error,
    helperText: helperText,
  };
};
