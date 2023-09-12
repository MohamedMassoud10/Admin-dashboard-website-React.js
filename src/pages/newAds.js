import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createScreenAd } from "../redux/screenAdSlice";
import "./newads.css";
const NewAds = () => {
  const selector = useSelector((store) => store.ads.screenAds);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    startTime: "",
    endTime: "",
    file: null,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleAddAds = () => {
    const newId = selector.data?.result?.length
      ? selector.data.result.length + 1
      : 1;
    dispatch(
      createScreenAd({
        id: newId,
        startTime: values.startTime,
        endTime: values.endTime,
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
              onChange={(e) =>
                setValues({ ...values, startTime: e.target.value })
              }
              value={values.startTime}
            />
          </div>
          <br />
          <div className="">
            <label>ads price</label>
            <input
              type="text"
              placeholder="type ads title . . ."
              onChange={(e) =>
                setValues({ ...values, endTime: e.target.value })
              }
              value={values.endTime}
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
