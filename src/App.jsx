import React, { useEffect } from "react";
import AdsCollection from "./components/AdsCollection";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import "./globalstyles.css";
import NewAds from "./features/newAds";
import UpdateAds from "./features/updateAds";
import Login from "./pages/login/Login";
const App = () => {
  const navigate = useNavigate();
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
