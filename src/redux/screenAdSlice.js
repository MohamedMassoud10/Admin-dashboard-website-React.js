import { current, createSlice } from "@reduxjs/toolkit";
import adsData from "./../data/ads.json";
const screenAdSlice = createSlice({
  name: "screenAds",
  initialState: adsData,
  reducers: {
    fetchScreenAds: (state, action) => {
      state.screenAds = action.payload;
    },
    createScreenAd: (state, action) => {
      state.push(action.payload);
    },
    updateScreenAd: (state, action) => {
      const { id, title, price, file } = action.payload;

      // Find the index of the element with the matching id
      const index = state.findIndex((item) => item.id === Number(id));

      if (index !== -1) {
        const updatedState = [...state];
        updatedState[index] = {
          ...state[index],
          title,
          price,
          file,
        };

        return updatedState;
      }

      return state;
    },
  },
});

export const {
  fetchScreenAds,
  updateScreenAd,
  //deleteScreenAd,
  createScreenAd,
} = screenAdSlice.actions;

export default screenAdSlice.reducer;
