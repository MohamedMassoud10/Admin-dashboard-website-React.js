import { createSlice } from "@reduxjs/toolkit";
import adsData from "./../data/ads.json";
const screenAdSlice = createSlice({
  name: "screenAds",
  initialState: adsData,
  reducers: {
    fetchScreenAds: (state, action) => {
      state.screenAds = action.payload;
    },
    deleteScreenAd: (state, action) => {
      const adIdToDelete = action.payload;
      const updatedScreenAds = state.screenAds.filter(
        (ad) => ad.id !== adIdToDelete
      );
      state.screenAds = updatedScreenAds;
      console.log("removed");
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
