// In AdsList.jsx
import React from "react";
import Ads from "./Ads.jsx";
import "./../pages/AdsCollection.js";

const AdsList = ({ data }) => {
  return (
    <div className="ads-list">
      {data.map((e) => (
        <Ads
          id={e.id}
          startTime={e.from_time} // Use correct property name
          to_time={e.to_time} // Use correct property name
          img={e.image}
          video={e.video}
          key={e.id}
        />
      ))}
    </div>
  );
};

export default AdsList;
