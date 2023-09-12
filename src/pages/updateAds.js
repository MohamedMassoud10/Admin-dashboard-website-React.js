import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useEffect
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
    title: "",
    price: "",
    image: "",
  });

  // Use useEffect to set initial values when selector or params.id changes
  useEffect(() => {
    // Find the existing ad with the matching ID
    const existingAd = selector.find((ad) => ad.id === Number(params.id));

    if (existingAd) {
      setValues({
        id: existingAd.id,
        title: existingAd.title,
        price: existingAd.price,
        image: existingAd.image,
      });
    }
  }, [selector, params.id]);

  const handleUpdateAds = () => {
    setValues({ id: "", title: "", price: "", image: "" });
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
            <label>from time</label>
            <input
              type="text"
              placeholder="time start . . "
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={values.title}
            />
          </div>
          <br />
          <div className="">
            <label>to time</label>
            <input
              type="text"
              placeholder="end time . . ."
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
