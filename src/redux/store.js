import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./screenAdSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    ads: adsReducer,
    auth: authSlice,
  },
});

export default store;
