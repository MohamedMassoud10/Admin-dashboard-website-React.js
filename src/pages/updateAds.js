import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateScreenAd } from "../redux/screenAdSlice";
import "./newads.css";

const UpdateAds = () => {
  const selector = useSelector((store) => store.ads.screenAds);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [values, setValues] = useState({
    id: "",
    startTime: "",
    endTime: "",
    file: "",
  });

  useEffect(() => {
    const existingAd = selector.find((ad) => ad.id === Number(params.id));
    if (existingAd) {
      setValues({
        id: existingAd.id,
        startTime: existingAd.from_time,
        endTime: existingAd.to_time,
        file: existingAd.image,
      });
    }
  }, [selector, params.id]);

  const handleUpdateAds = () => {
    dispatch(
      updateScreenAd({
        id: params.id,
        startTime: values.startTime,
        endTime: values.endTime,
        file: selectedFile, // Use the selected file
      })
    );
    navigate("/");
  };

  const handleUploadImg = (e) => {
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
              accept=".jpg, .jpeg, .png, .gif, .mp4"
              onChange={handleUploadImg}
            />
          </div>
          <br />
          <div className="">
            <label>from time</label>
            <input
              type="text"
              placeholder="time start . . "
              onChange={(e) =>
                setValues({ ...values, startTime: e.target.value })
              }
              value={values.startTime}
            />
          </div>
          <br />
          <div className="">
            <label>to time</label>
            <input
              type="text"
              placeholder="end time . . ."
              onChange={(e) =>
                setValues({ ...values, endTime: e.target.value })
              }
              value={values.endTime}
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
