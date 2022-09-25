import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import Layout from "./components/Layout";

import "./sass/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
