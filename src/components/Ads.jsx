import React from "react";

import "./ads.css";
import { useDispatch } from "react-redux";
import {
  deleteScreenAd,
  removeFromLocalStorage,
} from "./../redux/screenAdSlice";

import { Link } from "react-router-dom";

const Ads = (props) => {
  console.log("reach start", props);
  const dispatch = useDispatch();
  const handleRemoveUser = () => {
    const keyToRemove = `screenAd_${props.id}`;
    dispatch(deleteScreenAd({ id: props.id }));
    dispatch(removeFromLocalStorage({ keys: [keyToRemove] }));
  };
  return (
    <>
      <div className="ads-card">
        <div className="img-container">
          <img src={props.img} alt="ads-image" className="ads-image" />
        </div>

        <div className="ads-body">
          <div className="ads-details">
            <div className="start time">{props.startTime}</div>
            <div className="endTime">{props.endTime}</div>
          </div>
        </div>
        <div className="buttons">
          <div className="btn delete" onClick={handleRemoveUser}>
            Delete
          </div>
          <Link to={`/updateAds/${props.id}`} className="btn update">
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ads;
