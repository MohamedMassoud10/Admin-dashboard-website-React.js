import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import AdsCollection from "./components/AdsCollection";
import NewAds from "./features/newAds";
import UpdateAds from "./features/updateAds";
import Login from "./pages/login/Login";
import "./globalstyles.css";
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <>
            <Header />
            <Routes>
              <Route path="/" element={<AdsCollection />} />
              <Route path="/newAds" element={<NewAds />} />
              <Route path="/updateAds/:id" element={<UpdateAds />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
};

export default App;
