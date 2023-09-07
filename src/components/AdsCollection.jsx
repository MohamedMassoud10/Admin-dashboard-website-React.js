import React from "react";
import Ads from "./Ads.jsx";
import "./adscollection.css";
import adsData from "./../data/ads.json";
const AdsCollection = () => {
  return (
    <div className="container">
      <div className="ads-list">
        {adsData.map((e) => {
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
