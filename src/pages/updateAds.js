import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateScreenAd } from "../redux/screenAdSlice";

import "./newads.css";
import TextInput from "../components/TextInput";

const UpdateAds = () => {
  const selector = useSelector((store) => store.ads.screenAds);
  console.log("selector in update", selector);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingAds = selector.find((ad) => ad.id === Number(params.id)); // Use find instead of filter

  const { id, from_time, to_time, video, image } = existingAds;
  const [values, setValues] = useState({
    id,
    from_time,
    to_time,
    video,
    image,
  });

  const handleUpdateAds = () => {
    setValues({ startTime: "", endTime: "" });
    dispatch(
      updateScreenAd({
        id: params.id,
        from_time: values.from_time,
        to_time: values.to_time,
        image: values.image,
        video: values.video,
      })
    );
    navigate("/");
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Add new Advertisement</h1>
        <div className="content-inputs">
          {video && (
            <TextInput
              label="Add Video Link"
              placeholder="Write a video link..."
              value={values.video}
              onChange={(newValue) => setValues({ ...values, video: newValue })}
            />
          )}
          {image && (
            <TextInput
              label="Add Image Link"
              placeholder="Write an image link..."
              value={values.image}
              onChange={(newValue) => setValues({ ...values, image: newValue })}
            />
          )}
          <br />
          <TextInput
            label="from time"
            placeholder="Type start time . . "
            value={values.from_time}
            onChange={(newValue) =>
              setValues({ ...values, from_time: newValue })
            }
          />
          <br />
          <TextInput
            label="To Time"
            placeholder="Type end time . ."
            value={values.to_time}
            onChange={(newValue) => setValues({ ...values, to_time: newValue })}
          />
        </div>
        <button className="btn submit-btn update" onClick={handleUpdateAds}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateAds;
