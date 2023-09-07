import React from "react";
import Ads from "./Ads.jsx";
import "./adscollection.css";
import adsData from "./../data/ads.json";
import { useSelector } from "react-redux";
import store from "../redux/store.js";
const AdsCollection = () => {
  const data = useSelector((store) => store.ads);
  console.log(data);
  return (
    <div className="container">
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
