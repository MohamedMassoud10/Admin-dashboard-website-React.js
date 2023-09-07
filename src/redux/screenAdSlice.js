import { createSlice } from "@reduxjs/toolkit";
import adsData from "./../data/ads.json";
const screenAdSlice = createSlice({
  name: "screenAds",
  initialState: adsData,
  reducers: {
    fetchScreenAds: (state, action) => {
      state.screenAds = action.payload;
    },
    createScreenAd: (state, action) => {
      console.log(action);
    },
  },
});

export const {
  fetchScreenAds,
  //updateScreenAd,
  //deleteScreenAd,
  createScreenAd,
} = screenAdSlice.actions;

export default screenAdSlice.reducer;
