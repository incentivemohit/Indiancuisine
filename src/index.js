import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Context } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <App />
  </Context>
);
