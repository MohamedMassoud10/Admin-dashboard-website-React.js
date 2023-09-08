import React from "react";
import Ads from "./Ads.jsx";
import "./adscollection.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
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
