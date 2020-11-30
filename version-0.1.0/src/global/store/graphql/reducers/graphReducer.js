/**
 * The graph Redux reducer that handles all the state upadates
 */

import { mappedGraphRequestPool } from "../../../maps";
import {
  GRAPH_INPUT_CHANGE,
  GRAPH_QUERY_VARIABLE_CHANGE,
  MUTATION_TYPE,
  QUERY_TYPE,
  SUBSCRIPTION_TYPE,
} from "../actions/actionTypes";

import * as graphThreads from '../threads';

export const graphReducer = (MAIN_GRAPH_THREAD = "MAIN_GRAPH_THREAD") => (
  state = {},
  action
) => {
  /**
   * This will handle storing of data on a give thread for a given key
   */

  const { thread, type } = action;

  console.log("Some dispatch ...: \n", mappedGraphRequestPool);

  switch (type) {
    case MUTATION_TYPE:
      return state;

    case QUERY_TYPE:
      return state;

    case SUBSCRIPTION_TYPE:
      return state;

    /**
     * if a certain input is attached to graph state this will hold the data
     */
    case GRAPH_INPUT_CHANGE:
      const { fieldName, fieldValue } = action;
      return { ...state, [thread + fieldName]: fieldValue };

    /**
     * When ever a variable attached to a certain query changes,
     * the data will be saved in this reducer
     */
    case GRAPH_QUERY_VARIABLE_CHANGE:
      const { variableName, variableValue } = action;
      return {
        ...state,
        [thread]: {
          ...state[thread],
          [variableName]: variableValue,
        },
        
    };
     default:
       return state;
   }
}  ;
 