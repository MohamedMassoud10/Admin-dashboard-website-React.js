import AdsCollection from "./components/AdsCollection";
import Header from "./components/Header";
import "./globalstyles.css";
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <AdsCollection />
  </>
);
