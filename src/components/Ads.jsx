import React from "react";
import "./ads.css";
import { useDispatch } from "react-redux";
import { deleteScreenAd } from "../redux/screenAdSlice";
import { Link } from "react-router-dom";

const Ads = ({ id, img, title, price }) => {
  const dispatch = useDispatch();

  const handleRemoveAd = () => {
    dispatch(deleteScreenAd({ id }));
  };

  return (
    <div className="ads-card">
      <div className="img-container">
        <img src={img} alt="ads-image" className="ads-image" />
      </div>
      <div className="ads-body">
        <div className="ads-details">
          <div className="title">{title}</div>
          <div className="price">{`${price}$`}</div>
        </div>
      </div>
      <div className="buttons">
        <div className="btn delete" onClick={handleRemoveAd}>
          Delete
        </div>
        <Link to={`/updateAds/${id}`} className="btn update">
          Update
        </Link>
      </div>
    </div>
  );
};

export default Ads;
