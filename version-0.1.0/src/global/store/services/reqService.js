import { connect } from "react-redux";
import { reqInputHook } from "./reqHooks/reqInputHook";
import { reqBtnHook } from "./reqHooks/reqBtnHook";
import { reqPingTestHook } from "./reqHooks/reqPingTestHook";
import { reqHook } from "./reqHooks/reqHook";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...state,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ...ownProps,
  dispatch,
  reqInput: reqInputHook(dispatch, ownProps),
  reqSubmitBtn: reqBtnHook(dispatch),
  reqOpen: reqHook(dispatch),
  openReq: reqHook(dispatch),
});

/**
 * Authentication Connector or container wrapper for all components that require authentication
 */
export const reqService = connect(mapStateToProps, mapDispatchToProps);

/**
 * Request Network Error Connector for checking all errors
 */
const mapStateToReqErrorProps = (state, ownProps) => ({
    ...ownProps,
    req: state.req
})

const mapDispatchToReqErrorProps = (dispatch, ownProps) => ({
    ...ownProps,
    dispatch,
    pingTest: reqPingTestHook(dispatch)
})

export const reqErrorService = connect(mapStateToReqErrorProps, mapDispatchToReqErrorProps);
