import { createSlice } from "@reduxjs/toolkit";
import adsData from "./../data/ads.json";
const screenAdSlice = createSlice({
  name: "screenAds",
  initialState: adsData,
  reducers: {
    fetchScreenAds: (state, action) => {
      state.screenAds = action.payload;
    },
  },
});

export const {
  fetchScreenAds,
  updateScreenAd,
  deleteScreenAd,
  createScreenAd,
} = screenAdSlice;

export default screenAdSlice.reducer;
