import React, { useEffect, useState } from "react";
import "./adscollection.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AdsList from "../components/AdsList.jsx";
import EmptyPage from "./EmptyPage";
import { fetchScreenAds } from "../redux/screenAdSlice";

const AdsCollection = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.ads.screenAds);
  console.log(selector);
  useEffect(() => {
    const apiUrl = `https://ads-back.shutterstudio.io/ads`;

    // Check if data is already in localStorage
    const storedData = localStorage.getItem("screenAds");
    console.log(storedData);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(fetchScreenAds(parsedData));
      setLoaded(true);
    } else {
      // Fetch the data if not in localStorage
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Save data to localStorage
          localStorage.setItem("screenAds", JSON.stringify(data));
          dispatch(fetchScreenAds(data));
          setLoaded(true);
        });
    }
  }, [dispatch]);

  console.log(selector);
  const divStyle = {
    margin: "4px 16px",
  };

  return (
    <div className="container">
      <Link to="/newAds">
        <button className="btn update" style={divStyle}>
          Create ADS
        </button>
      </Link>
      {loaded ? (
        selector.length > 0 ? (
          <AdsList data={selector} />
        ) : (
          <EmptyPage />
        )
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default AdsCollection;
