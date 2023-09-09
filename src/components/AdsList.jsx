import React from "react";
import Ads from "./Ads.jsx";
import "./../pages/AdsCollection.js";
const AdsList = ({ data }) => {
  return (
    <div className="ads-list">
      {data.map((e) => (
        <Ads
          img={e.image}
          title={e.title}
          price={e.price}
          id={e.id}
          key={e.id}
        />
      ))}
    </div>
  );
};

export default AdsList;
