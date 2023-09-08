import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./newads.css";
const UpdateAds = () => {
  const selector = useSelector((store) => store.ads);
  const params = useParams();
  console.log(params.id);
  const navigate = useNavigate();
  //const existingAds = selector.filter((ads) => ads[ads].id === params.id);
  //console.log(existingAds);
  // const [values, setValues] = useState({
  //   title,
  //   price,
  //   file,
  // });
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
              //onChange={handelUploadImg}
              //value={values.file}
            />
          </div>
          <br />
          <div className="">
            <label>ads title</label>
            <input
              type="text"
              placeholder="New Ads"
              //onChange={(e) => setValues({ ...values, title: e.target.value })}
              //value={values.title}
            />
          </div>
          <br />
          <div className="">
            <label>ads price</label>
            <input
              type="text"
              placeholder="type ads title . . ."
              //onChange={(e) => setValues({ ...values, price: e.target.value })}
              //value={values.price}
            />
          </div>
        </div>
        <button className="btn submit-btn update">edit</button>
      </div>
    </div>
  );
};

export default UpdateAds;
