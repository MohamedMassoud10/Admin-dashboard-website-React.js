import React from "react";
import Header from "./../components/Header";
import AdsCollection from "./../components/AdsCollection";
import NewAds from "./../features/newAds";
import UpdateAds from "./../features/updateAds";
import { Route, Routes, useNavigate } from "react-router-dom";

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
