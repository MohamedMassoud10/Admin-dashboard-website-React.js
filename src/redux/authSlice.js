import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAdmin: false,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAdmin = action.payload;
      if (
        action.payload.username === "admin" &&
        action.payload.password === "admin"
      ) {
        state.isAuthenticated = true;
      }
      console.log(action.payload.username);
    },

    logout: (state) => {
      state.isAdmin = false; // Mutate the draft state
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
