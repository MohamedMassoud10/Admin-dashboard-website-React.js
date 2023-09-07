import React from "react";
import { useDispatch } from "react-redux";
import { deleteScreenAd } from "./../redux/screenAdSlice"; // Import the deleteScreenAd action

import "./ads.css";

const Ads = (props) => {
  const dispatch = useDispatch();

  const handleDeleteAd = () => {
    dispatch(deleteScreenAd(props.id));
  };

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
          <div className="btn delete" onClick={handleDeleteAd}>
            Delete
          </div>
          <div className="btn update">Update</div>
        </div>
      </div>
    </>
  );
};

export default Ads;
