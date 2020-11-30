import React from 'react';

/**
 * Mutation Component
 * this component will automatically load the mutation and
 */
import propTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import graphPool from "../../../graphql";
import { CircularProgress } from '@material-ui/core';

export default function MutationReq(props) {


  const { thread, isInput, inputName } = props;

  var MUTATION = graphPool.MUTATIONS[thread];

  if (
    typeof props.mutation !== "undefined" &&
    typeof props.mutation !== "null" &&
    props.mutation !== null
  ) {
    MUTATION = props.mutation;
  }


  const [mutationFunc, mutationState] = useMutation(MUTATION);
  const [variables, setVariables] = useState({ ...props.variables });
  const [validation, setValidation] = useState(false);

  const onSubmit = () => {
    var _vars = variables;
    if(Boolean(isInput) === true){
      _vars = {
        [inputName]: variables
      }
    }

    mutationFunc({
      variables: _vars,
    });
  };

  const submitBtn = () => {
    return {
      type: "submit",
      endIcon: mutationState.loading ? <CircularProgress size="20px" /> : "",
      disabled: validation === true ? mutationState.loading : true,
    };
  };

  const inputVariable = ({ name, value, rules }) => {
    return {
      name: name,
      value: variables[name],
      disabled: mutationState.loading,
      onChange: (e) => {
        setVariables({ ...variables, [name]: e.target.value });
        var isValid;
        for (var field in variables) {
          if (variables[field].length > 1) {
            isValid = true;
          } else {
            isValid = false;
          }
        }
        setValidation(isValid);
      },
    };
  };

  return (
    <form
      className={props.className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {props.children({
        ...mutationState,
        inputVariable,
        onSubmit,
        submitBtn,
      })}
    </form>
  );
}

MutationReq.propTypes = {
  mutationProps: propTypes.objectOf({
    loading: propTypes.bool,
    inputVariable: propTypes.object
  }),
  mutation: propTypes.any,
  thread: propTypes.string,
  variables: propTypes.object,
  isInput: propTypes.bool,
};
