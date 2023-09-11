import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateScreenAd } from "../redux/screenAdSlice";
import "./newads.css";
const UpdateAds = () => {
  const selector = useSelector((store) => store.ads.screenAds);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingAds = selector.filter((ad) => ad.id === Number(params.id));
  const { id, title, price, image } = existingAds[0];
  const [selectedFile, setSelectedFile] = useState(null);
  const [values, setValues] = useState({
    id,
    title,
    price,
    image,
  });
  const handleUpdateAds = () => {
    setValues({ title: "", price: "", image: "" });
    dispatch(
      updateScreenAd({
        id: params.id,
        title: values.title,
        price: values.price,
        image: values.image,
      })
    );
    navigate("/");
  };
  const handelUploadImg = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="container">
      <div className="content">
        <h1>Add new Advertisement</h1>
        <div className="content-inputs">
          <div className="IV-input">
            <label>
              picture <br />
              or video
            </label>
            <input
              type="file"
              placeholder="please add the ads video or picture"
              onChange={handelUploadImg}
              value={values.file}
            />
          </div>
          <br />
          <div className="">
            <label>ads title</label>
            <input
              type="text"
              placeholder="New Ads"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={values.title}
            />
          </div>
          <br />
          <div className="">
            <label>ads price</label>
            <input
              type="text"
              placeholder="type ads title . . ."
              onChange={(e) => setValues({ ...values, price: e.target.value })}
              value={values.price}
            />
          </div>
        </div>
        <button className="btn submit-btn update" onClick={handleUpdateAds}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateAds;
