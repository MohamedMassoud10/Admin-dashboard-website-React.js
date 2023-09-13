import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AdsList from "../components/AdsList";
import EmptyPage from "./EmptyPage";
import { fetchScreenAds } from "../redux/screenAdSlice";
import "./adscollection.css";
const CreateAdsButton = () => (
  <Link to="/newAds">
    <button className="btn update">Create ADS</button>
  </Link>
);

const LoadingIndicator = () => <div className="loading">Loading...</div>;

const AdsCollection = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.ads.screenAds);

  useEffect(() => {
    const apiUrl = `https://ads-back.shutterstudio.io/ads`;

    const fetchAdsData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        localStorage.setItem("screenAds", JSON.stringify(data.data.result));
        dispatch(fetchScreenAds(data.data.result));
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const storedData = localStorage.getItem("screenAds");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(fetchScreenAds(parsedData));
      setLoaded(true);
    } else {
      fetchAdsData();
    }
  }, [dispatch]);

  return (
    <div className="container">
      <CreateAdsButton />
      {loaded ? (
        selector.length > 0 ? (
          <AdsList data={selector} />
        ) : (
          <EmptyPage />
        )
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

export default AdsCollection;
