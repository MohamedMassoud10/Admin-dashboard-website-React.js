import React from "react";
import Ads from "./Ads.jsx";
import "./../pages/AdsCollection.js";
const AdsList = ({ data }) => {
  console.log(data);
  return (
    <div className="ads-list">
      {data.map((e) => (
        <Ads
          id={e.id}
          img={e.image}
          startTime={e.from_time}
          endTime={e.to_time}
          key={e.id}
        />
      ))}
    </div>
  );
};

export default AdsList;
