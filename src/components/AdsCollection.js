import React from "react";
import Ads from "./Ads.jsx";
import "./adscollection.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AdsList from "./AdsList.jsx";

const AdsCollection = () => {
  const data = useSelector((store) => store.ads);
  console.log(data);

  const divStyle = {
    margin: "4px 16px",
  };

  return (
    <div className="container">
      <Link to="/newAds">
        <button className="btn update" style={divStyle}>
          Create ADS
        </button>
      </Link>
      <AdsList data={data} />
    </div>
  );
};

export default AdsCollection;
