import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/boxicons-2.1.4/css/boxicons.min.css";
import "./sass/index.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import "boxicons";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/catalog/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
