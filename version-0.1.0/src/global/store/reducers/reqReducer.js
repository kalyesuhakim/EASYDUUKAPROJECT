import {
  REQ_INPUT_CHANGE,
  REQ_INITIALIZE_REQS,
  REQ_NETWORK_ERROR,
  REQ_CACHED,
  REQ_STARTED,
  REQ_FAILED,
  REQ_COMPLETED,
  REQ_COMPLETED_WITH_VALID_RESPONSE,
  REQ_COMPLETED_WITH_INVALID_RESPONSE,
} from "../actions/reqActiontTypes";

const initialState = {
  netError: false,
  cachedReqs: {}, // an array of all cached requests whiched have failed
};

/**
 * All Requests reducer and state manager for all requesta made
 * Every request will fire an event or action which will be handled in the
 * reqReducer...,
 * @function reqReducer
 * @param MAIN_THREAD string // the main thread is a unique string to a reducer
 * @return object state
 *
 */
const reqReducer = (MAIN_THREAD) => (state = initialState, action) => {
  /**
   * Work arround the state update issue.
   * threadChange will be used to help redux update a component every time something happens;
   *
   */
  const threadChange =
    action.type + action.thread + Math.round(Math.random(1000) * 10000000000);

  var _state = {
    ...state,
    netError: false,
    ["threadChange"]: threadChange,
    [action.thread]: {
      ...(typeof state[action.thread] === 'undefined' ? {} : state[action.thread]),
      
    },
  };

  /**
   * Check all actions dispatched and refresh the state.
   * if there is no type the state will not update;
   */
  switch (action.type) {
    case REQ_INITIALIZE_REQS:
      return { ..._state, [action.thread]: {
          ..._state[action.thread], 
          ...action.data,
      } };

    /**
     * When ever an input attached to a request changes please do the following update such that
     * It works well
     */
    case REQ_INPUT_CHANGE:
      return {
        ..._state,
        [action.thread]: {
          ..._state[action.thread],
          lock: true,
          payload: {
            ..._state[action.thread].payload,
            [action.name]: action.data,
          },
        },
      };

    // if there happen to be a network error
    case REQ_NETWORK_ERROR:
      return {
        ..._state,
        netError: true,
        cachedReqs: { ..._state.cachedReqs, [action.thread]: action.req },
      };

    // After the request has been cached for future use and once there is an issue we can retry to submit the data automalically
    case REQ_CACHED:
      return {
        ..._state,
        ["cachedReqs"]: {
          ..._state["cachedReqs"],
          [action.thread]: action.req,
        },
      };

    // when the request has just been fired this event or action is started
    case REQ_STARTED:
      return {
        ..._state,
        [action.thread]: {
          ..._state[action.thread],
          ["loading"]: true,
          ['started']: true
        },
      };

    // when a request started but failed
    case REQ_FAILED:
      return {
        ..._state,
        [action.thread]: {
          ..._state[action.thread],
          ["req_failed"]: true,
        },
      };

    // request completed
    case REQ_COMPLETED:
      return {
        ..._state,
        [action.thread]: {
          ..._state[action.thread],
          ["comp"]: true,
          ["loading"]: false,
        },
      };

    //request completed with successfull feedback or response
    case REQ_COMPLETED_WITH_VALID_RESPONSE:
      return {
        ..._state,
        [action.thread]: {
          ..._state[action.thread],
          ["comp_with_vr"]: true,
          ['comp_with_ir']: false,
          ["data"]: action.data,
        },
      };

    // request completed with false response
    case REQ_COMPLETED_WITH_INVALID_RESPONSE:
      return {
        ..._state,
        [action.thread]: {
          ..._state[action.thread],
          ['errors']: action.errors,
          ["loading"]: false,
          ["comp_with_ir"]: true,
          ["comp_with_vr"]: false,
          ["data"]: action.data,
        },
      };

    default:
      return state;
  }
};

export default reqReducer;
