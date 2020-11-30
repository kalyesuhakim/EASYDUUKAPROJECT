import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import AdminRouting from "./admin/AdminRouting.js";
// import Routing from "./site/SiteRouting";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<Routing />, document.getElementById("root"));
ReactDOM.render(<AdminRouting />, document.getElementById("root"));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();