import React from "react";
import AdsCollection from "./components/AdsCollection";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./globalstyles.css";
import NewAds from "./features/NewAds";
import UpdateAds from "./features/UpdateAds";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<AdsCollection />}></Route>
        <Route path="/newAds" element={<NewAds />}></Route>
        <Route path="/updateAds/:id" element={<UpdateAds />} />
      </Routes>
    </>
  );
};

export default App;
