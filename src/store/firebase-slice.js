import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, action) {
      if (action.payload) {
        state.isLoggedIn = true;
      }
    },
    logout(state, action) {
      if (!action.payload) {
        state.isLoggedIn = false;
      }
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
