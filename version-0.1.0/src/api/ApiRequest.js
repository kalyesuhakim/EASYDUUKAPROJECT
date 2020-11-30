import Axios from "axios";
import React, { useEffect, useState } from "react";
import { apiEndPoints } from "./apiEndPoints";
import propTypes from "prop-types";
import { CircularProgress } from "@material-ui/core";
import { validate } from "graphql";

/**
 * Handle all requests to the api with the Query component
 *
 */

export default function ApiRequest(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(props.initialData);
  const [autoload, setAutoload] = useState(props.autoload);
  const [payload, setPayload] = useState(props.initialPayload || {});
  const [validationErrors, setValidationErrors] = useState({});
  const [validationRules, setValidationRules] = useState(
    props.validationRules || []
  );

  var endPoint = props.endPoint;
  var method = props.method || "GET";
  var isForm = props.isForm || false;
  var thread = props.thread || false;
  var contentType = props.contentType || "application/json";
  var params = props.params || {};

  /**
   * Check if the endpoint has been registred
   */
  if (thread) {
    if (apiEndPoints[thread]) {
      var { endPoint, method, contentType } = apiEndPoints[thread];
    }
  }

  /**
   * Request | fetch the data
   */
  const request = () => {
    setAutoload(false);
    setLoading(true);
    Axios({
      method,
      url: typeof endPoint == "function" ? endPoint(params) : endPoint,
      contentType: contentType,
      data: payload,
      //This is for cross support but the application does need it.
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      widthCredentials: true,
    })
      .then((res) => {
        setLoading(false);
        setError(false);
        setData(res.data.data);
        if (typeof props.afterLoad != "undefined") {
          props.afterLoad({ data: res.data, error: false });
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  const validate = (field, rule) => {
    var errors = { ...validationErrors };
    if (rule == "required") {
      if (payload[field].length > 0) {
        delete errors[field];
        setValidationErrors(errors);
      }
      return setValidationErrors({
        ...validationErrors,
        [field]: `${field} must is required`,
      });
    }
  };

  const onSubmit = (e) => {
    for (var field in payload) {
      var rules = validationRules[field];
      console.log(rules);
      if (rules) {
        rules.split("|").map((rule) => {
          validate(field, rule);
        });
      }
    }

    /**
     * @Bug this part needs to be fixed
     */
    if (validationErrors.length < 1) {
      request();
      e.preventDefault();
    }
    request();
    e.preventDefault();
  };

  /**
   * When ever the input changes
   */
  const onInputChange = (e) => {
    const { name, value } = e.target;
    if(name in validationRules){
      validate(name, name in validationRules[name].split("|"));
    }
    /**
     * If thread is not supplied we shall use the react state to save the data
     *
     */
    if (thread === false) {
      setPayload({ ...payload, [name]: value });
    } else {
      /**
       * Lets use the Redux state management tool to store the data
       */
      setPayload({ ...payload, [name]: value });
    }
  };

  const onFileChange = (e) => {};

  const fileInput = (e) => {};

  /**
   * Input field
   */
  const input = (options) => {
    const { name } = options;
    return {
      onChange: onInputChange,
      name: name,
      disabled: loading,
      value: payload[name],
      helperText: validationErrors[name],
      required: true,
    };
  };

  const uploadFile = (e) => {
    e.preventDefault();
  };

  const submitBtn = (options = { endIcon: "" }) => {
    const { endIcon } = options;
    return {
      type: "submit",
      ...options,
      endIcon: loading ? (
        <CircularProgress size="20px" color="secondary" />
      ) : (
        endIcon
      ),
      onSubmit: onSubmit,
      disabled: loading,
      onClick: onSubmit,
    };
  };

  useEffect(() => {
    if (autoload === true && loading === false) {
      request();
    }
  }, [data, loading, error]);

  if (isForm) {
    return (
      <form onSubmit={onSubmit} method={method}>
        {props.children({
          validationErrors,
          loading,
          error,
          data,
          input,
          submitBtn,
          onSubmit,
        })}
      </form>
    );
  }
  return props.children({
    validationErrors,
    loading,
    error,
    data,
    input,
    submitBtn,
    onSubmit,
  });
}

ApiRequest.propTypes = {
  initialData: propTypes.any,
  thread: propTypes.string,
  endPoint: propTypes.string,
  initialPayload: propTypes.any,
  onSubmit: propTypes.func,
  method: propTypes.oneOf([
    "GET",
    "get",
    "post",
    "patch",
    "delete",
    "POST",
    "PATCH",
    "DELETE",
  ]),
  contentType: propTypes.string,
};
