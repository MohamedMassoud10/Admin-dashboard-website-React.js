import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAdmin = action.payload;
    },

    logout: (state) => {
      state.isAdmin = false; // Mutate the draft state
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
