import React from "react";
import "./adscollection.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AdsList from "../components/AdsList.jsx";
import EmptyPage from "./EmptyPage";

const AdsCollection = () => {
  const data = useSelector((store) => store.ads);
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
      {data.length > 0 ? <AdsList data={data} /> : <EmptyPage />}
    </div>
  );
};

export default AdsCollection;
