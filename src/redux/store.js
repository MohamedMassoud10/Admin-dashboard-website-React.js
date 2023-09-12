import { configureStore } from "@reduxjs/toolkit";
import adsReducer from "./screenAdSlice";
import authSlice from "./authSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    ads: adsReducer,
    auth: authSlice,
  },
  middleware: [thunk],
});

export default store;
