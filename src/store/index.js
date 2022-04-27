import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import loginReducer from "./firebase-slice";
import productsReducer from "./products-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    login: loginReducer,
    products: productsReducer,
  },
});
export default store;
