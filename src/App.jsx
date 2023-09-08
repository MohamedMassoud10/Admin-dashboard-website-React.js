import React from "react";
import AdsCollection from "./components/AdsCollection";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./globalstyles.css";
import NewAds from "./features/newAds";
import UpdateAds from "./features/updateAds";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AdsCollection />}></Route>
        <Route path="/newAds" element={<NewAds />}></Route>
        <Route path="/updateAds/:id" element={<UpdateAds />}></Route>
      </Routes>
    </>
  );
};

export default App;
