import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateScreenAd } from "../redux/screenAdSlice";
import "./newads.css";

const UpdateAds = () => {
  const selector = useSelector((store) => store.ads.screenAds);
  console.log("selector in update", selector);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingAds = selector.find((ad) => ad.id === Number(params.id)); // Use find instead of filter
  console.log("existingAds: ", existingAds);

  const { id, from_time, to_time, file } = existingAds;
  const [selectedFile, setSelectedFile] = useState(null);
  const [values, setValues] = useState({
    id,
    from_time,
    to_time,
    file,
  });
  console.log("values: ", values);

  const handleUpdateAds = () => {
    console.log("HU");
    setValues({ startTime: "", endTime: "" });
    dispatch(
      updateScreenAd({
        id: params.id,
        from_time: values.from_time,
        to_time: values.to_time,
        image: values.file,
      })
    );
    console.log("Time", values.to_time);
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
              placeholder="please add the ads video or picture"
              onChange={handleUploadImg}
              value={values.file}
            />
          </div>
          <br />
          <div className="">
            <label>from time</label>
            <input
              type="text"
              placeholder="New Ads"
              onChange={(e) =>
                setValues({ ...values, from_time: e.target.value })
              }
              value={values.from_time}
            />
          </div>
          <br />
          <div className="">
            <label> to time</label>
            <input
              type="text"
              placeholder="type ads title . . ."
              onChange={(e) =>
                setValues({ ...values, to_time: e.target.value })
              }
              value={values.to_time}
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
