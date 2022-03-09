import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartShow: false };
const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartShow = !state.cartShow;
    },
  },
});

export const uiActions = UiSlice.actions;
export default UiSlice.reducer;
