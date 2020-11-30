export const HOST = "http://apis.hapipie.com:3333/admin";
// export const HOST = window.location.protocol + "//" + window.location.host;
export const APP_PATH = HOST;
export const headers = {
  json: {
    headers: {
      "Content-Type": "application/json",
    },
  },
};
export const apiToken = { _token: window._token };

export const CONFIG = {
  IMG_DIR: HOST + "/images-container",
};

export const axiosConfig = {};
