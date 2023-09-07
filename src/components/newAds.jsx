import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./newads.css";
const NewAds = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    title: "",
    price: "",
  });
  const handleAddAds = () => {
    navigate("/");
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
              onChange={(e) => setValues({ ...values, file: e.target.value })}
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
