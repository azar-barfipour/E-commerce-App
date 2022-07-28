import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import loginReducer from "./firebase-slice";
import backgroundReducer from "./background-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    login: loginReducer,
    background: backgroundReducer,
  },
});
export default store;
