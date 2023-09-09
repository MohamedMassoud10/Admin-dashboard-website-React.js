import React from "react";

import "./ads.css";
import { useDispatch } from "react-redux";
import { deleteScreenAd } from "./../redux/screenAdSlice";
import { Link } from "react-router-dom";

const Ads = (props) => {
  const dispatch = useDispatch();
  const handleRemoveUser = () => {
    dispatch(deleteScreenAd({ id: props.id }));
  };
  return (
    <>
      <div className="ads-card">
        <div className="img-container">
          <img src={props.img} alt="ads-image" className="ads-image" />
        </div>

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
