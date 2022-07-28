import { createSlice } from "@reduxjs/toolkit";

const initialState = { background: "" };
const BackgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setBackground(state, action) {
      state.background = action.payload;
    },
  },
});

export const backgroundActions = BackgroundSlice.actions;
export default BackgroundSlice.reducer;
