import React from "react";
import Header from "./../components/Header";
import AdsCollection from "./AdsCollection";
import NewAds from "./newAds";
import UpdateAds from "./updateAds";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AdsCollection isAuthenticated />}></Route>
        <Route path="/newAds" element={<NewAds />}></Route>
        <Route path="/updateAds/:id" element={<UpdateAds />}></Route>
      </Routes>
    </>
  );
};

export default Home;
