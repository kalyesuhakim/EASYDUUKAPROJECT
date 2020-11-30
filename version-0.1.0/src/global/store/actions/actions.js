import {
  REQUEST_STARTED,
  REQUEST_SUCCESS,
  REQUEST_COMPLETED,
  REQUEST_FAILED,
  REQUEST_NETWORK_ERROR,
  REQUEST_ALL_LOADED,
  REQUEST_VALIDATION_ERROR,
  ITEM_NOT_FOUND,
  REQUEST_PENDING,
  RELOAD_CONTENT,
  READ_TOPIC,
  IS_EDITING,
  REQUEST_SERVER_ERROR,
  REQUEST_RETRY_SUCCESS,
  CLEAR_DATA_FROM_THREAD,
} from "./actionTypes";

export const DEFAULT_THREAD = "default";

/**
 * Mian will act as the main reducer name that we are trying to interact with
 */
export const requestStarted = (main, thread = DEFAULT_THREAD) => {
  return { type: REQUEST_STARTED + main, thread: thread };
};

export const requestSuccess = (payload, main, thread = DEFAULT_THREAD) => ({
  type: REQUEST_SUCCESS + main,
  payload,
  thread,
});

export const requestCompleted = (main, thread = DEFAULT_THREAD) => ({
  type: REQUEST_COMPLETED + main,
  thread,
});

export const requestFailed = (main, thread = DEFAULT_THREAD) => ({
  type: REQUEST_FAILED + main,
  thread,
  main,
});

export const requestServerError = (main, thread = DEFAULT_THREAD) => ({
  type: REQUEST_SERVER_ERROR,
  thread,
});

export const requestNetworkError = (thread = DEFAULT_THREAD) => ({
  type: REQUEST_NETWORK_ERROR,
  thread,
});

export const requestRetrySuccess = (thread = DEFAULT_THREAD) => ({
  type: REQUEST_RETRY_SUCCESS,
  thread,
});

export const requestAllLoaded = (main, thread = DEFAULT_THREAD) => ({
  type: REQUEST_ALL_LOADED + main,
  thread,
});

export const requestPending = (main, thread = DEFAULT_THREAD) => ({
  type: REQUEST_PENDING + main,
  thread,
});

export const requestValidationError = (
  errors,
  main,
  thread = DEFAULT_THREAD
) => {
  const keys = Object.keys(errors);
  keys.map((key) => {
    errors[key] = {
      helperText: errors[key].join(" "),
      error: true,
    };
  });
  return {
    type: REQUEST_VALIDATION_ERROR + main,
    thread: thread,
    errors,
  };
};

export const itemNotFound = (item, main, thread) => ({
  type: ITEM_NOT_FOUND + main,
  thread,
  item,
});

export const reloadContent = (main, thread = DEFAULT_THREAD) => ({
  type: RELOAD_CONTENT + main,
  thread,
});

export const readTopic = (topic, main, thread = DEFAULT_THREAD) => ({
  type: READ_TOPIC,
  main,
  topic,
  thread,
});

export const setNotFound = (main, thread = DEFAULT_THREAD) => ({
  main,
  thread,
});

export const isEditing = (topic, main, thread = DEFAULT_THREAD) => ({
  type: IS_EDITING,
  main,
  thread,
  topic,
});


export const clearDataFromThread = (thread = DEFAULT_THREAD) => ({
    type: CLEAR_DATA_FROM_THREAD,
    thread,
})


// export const cacheReq = (req, thread = DEFAULT_THREAD) => ({
//   type: CACHE_REQUEST,
//   thread,
//   req
// })