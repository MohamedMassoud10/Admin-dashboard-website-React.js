import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createScreenAd } from "../redux/screenAdSlice";
import "./newads.css";
const NewAds = () => {
  const selector = useSelector((store) => store.ads);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    title: "",
    price: "",
    file: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleAddAds = () => {
    dispatch(
      createScreenAd({
        id: selector.length + 1,
        title: values.title,
        price: values.price,
        image: selectedFile,
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
        <button className="btn submit-btn update" onClick={handleAddAds}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewAds;
