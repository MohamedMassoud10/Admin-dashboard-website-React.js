import React from "react";

import "./ads.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Ads = (props) => {
  const selector = useSelector((store) => store.ads);
  return (
    <>
      <div className="ads-card">
        <img src={props.img} alt="ads-image" className="ads-image" />
        <div className="ads-body">
          <div className="ads-details">
            <div className="title">{props.title}</div>
            <div className="price">
              {props.price}
              {`$`}
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="btn delete">Delete</div>
          <Link to={`/updateAds/${props.id}`} className="btn update">
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ads;
