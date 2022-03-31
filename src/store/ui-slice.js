import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartShow: false, notification: "" };
const UiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart(state) {
      state.cartShow = !state.cartShow;
    },
    notificationAlert(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        error: action.payload.error,
      };
    },
  },
});

export const uiActions = UiSlice.actions;
export default UiSlice.reducer;
