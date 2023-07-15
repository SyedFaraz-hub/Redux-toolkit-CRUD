import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: "visitor",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      // Simulate authentication logic
      if (username === "admin" && password === "admin123") {
        state.isAuthenticated = true;
        state.role = "admin";
      } else if (username === "user" && password === "user123") {
        state.isAuthenticated = true;
        state.role = "user";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "visitor";
    },
  },
});

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
