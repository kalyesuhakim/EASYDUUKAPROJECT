import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import propTypes from "prop-types";
import store from "..";
import { mappedGraphRequestPool } from "../../maps";
import { addAlertNotifAction } from "../actions/alertNotifsActions";
import authenticateUserHook from "../services/authHooks/authenticateUserHook";

/**
 * A wrapper on top of the graph ql query to communicate with the redux store and also create room for
 * loose coupling of components
 */

export default function QueryReq(props) {
  const { loadOnMount, thread, authenticates } = props;

  const variables = props.variables || {};

  const { QUERIES } = mappedGraphRequestPool;

  var QUERY = null;

  if (thread in QUERIES) {
    QUERY = QUERIES[thread];
  }

  if (
    typeof props.query != "null" &&
    typeof props.query != "undefined" &&
    props.query !== null
  ) {
    QUERY = props.query;
  }

  const [state, setState] = useState({
    variables,
    mountLoadFinished: false,
  });

  console.log("\n\n\n\n\n ", QUERY, QUERIES, "\n\n\\n\n\n ");

  if (loadOnMount === true && state.mountLoadFinished === false) {
  }

  const queryRes = useQuery(QUERY, {
    variables: variables,
    pollInterval:  props.pollInterval || false,
  });
  
  console.log("Some new data");

  if (queryRes.error === true) {
    console.log(queryRes.error);
    store.dispatch(
      addAlertNotifAction({
        code: "GRAPH_ERROR",
        title: "Some thing went wrong",
        message: "Some thing went wrong while loading data",
        severity: 'error',
      })
    );
  }

  if(authenticates === true){
    const data = queryRes;
    if('login' in data){
      if('success' in data.login){
        if(data.login.success === true){
          // cacheUserDataOnDevice({
          //   access_token: data.login.access_token,
          //   user: data.login.customer,
          // })
          authenticateUserHook(store.dispatch)({
            access_token: data.login.access_token,
            user: data.login.customer,
          }, 'ACCESS_GRANTED');
        }
      }
    }
  }

  return (
    <div>
      {props.children({
        ...queryRes,
      })}
    </div>
  );
}

QueryReq.propTypes = {
  query: propTypes.any.isRequired,
};
