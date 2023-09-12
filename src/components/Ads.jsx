import React from "react";

import "./ads.css";
import { useDispatch } from "react-redux";
import {
  deleteScreenAd,
  removeFromLocalStorage,
} from "./../redux/screenAdSlice";

import { Link } from "react-router-dom";

const Ads = (props) => {
  const dispatch = useDispatch();
  const handleRemoveUser = () => {
    const keyToRemove = `screenAd_${props.id}`;
    dispatch(deleteScreenAd({ id: props.id }));
    dispatch(removeFromLocalStorage({ keys: [keyToRemove] }));
  };
  const isImageEmpty = !props.img;
  return (
    <>
      <div className="ads-card">
        <div className="img-container">
          {isImageEmpty ? (
            // Render a video tag if props.img is empty
            <video controls>
              <source src={props.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Render an image tag if props.img is not empty
            <img src={props.img} alt="ads-image" className="ads-image" />
          )}
        </div>

        <div className="ads-body">
          <div className="ads-details">
            <div className="start time">
              <h3>Start time : </h3>
              <p>{props.startTime}</p>
            </div>
            <div className="endTime">
              <h3>End time : </h3>
              <p>{props.to_time}</p>
            </div>
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
