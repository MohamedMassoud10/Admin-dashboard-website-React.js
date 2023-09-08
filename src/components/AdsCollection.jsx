import React from "react";
import Ads from "./Ads.jsx";
import "./adscollection.css";
import { Link } from "react-router-dom";
import adsData from "./../data/ads.json";
import { useSelector } from "react-redux";
import store from "../redux/store.js";
const AdsCollection = () => {
  const data = useSelector((store) => store.ads);

  console.log(data[0]);
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
      <div className="ads-list">
        {data.map((e) => {
          return (
            <Ads
              img={e.image}
              title={e.title}
              price={e.price}
              id={e.id}
              key={e.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdsCollection;
