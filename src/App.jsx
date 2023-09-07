import React from "react";
import AdsCollection from "./components/AdsCollection";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./globalstyles.css";
import NewAds from "./features/newAds";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<AdsCollection />}></Route>
        <Route exact path="/newAds" element={<NewAds />}></Route>
      </Routes>
    </>
  );
};

export default App;
