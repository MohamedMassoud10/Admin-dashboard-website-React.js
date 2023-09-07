import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./screenAdSlice";

const store = configureStore({
  reducer: {
    ads: adsReducer,
  },
});

export default store;
