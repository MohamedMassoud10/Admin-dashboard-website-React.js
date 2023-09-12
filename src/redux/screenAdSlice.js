import { createSlice } from "@reduxjs/toolkit";
const screenAdSlice = createSlice({
  name: "screenAds",
  initialState: { screenAds: [] }, // Use an object to match the structure of your state
  reducers: {
    fetchScreenAds: (state, action) => {
      state.screenAds = action.payload; // Update the state with the result array
    },
    createScreenAd: (state, action) => {
      state.screenAds.push(action.payload);
      localStorage.setItem("screenAds", JSON.stringify(state.screenAds));
    },
    updateScreenAd: (state, action) => {
      const { id, from_time, to_time, image } = action.payload;
      const index = state.screenAds.findIndex((item) => item.id === Number(id));

      if (index !== -1) {
        state.screenAds[index] = {
          ...state.screenAds[index],
          from_time,
          to_time,
          image,
        };
        // Save the updated data to local storage
        localStorage.setItem("screenAds", JSON.stringify(state.screenAds));
      }
    },
    deleteScreenAd: (state, action) => {
      const { id } = action.payload;

      // Find the index of the element with the matching id
      const index = state.screenAds.findIndex((item) => item.id === Number(id));

      if (index !== -1) {
        state.screenAds.splice(index, 1); // Remove the item directly
        localStorage.setItem("screenAds", JSON.stringify(state.screenAds));
        localStorage.removeItem(`screenAd_${id}`);
      }
    },
    removeFromLocalStorage: (state, action) => {
      const { keys } = action.payload;
      // Remove each item from local storage
      keys.forEach((key) => {
        localStorage.removeItem(key);
      });
    },
  },
});

export const {
  fetchScreenAds,
  updateScreenAd,
  deleteScreenAd,
  createScreenAd,
  removeFromLocalStorage,
} = screenAdSlice.actions;

export default screenAdSlice.reducer;
