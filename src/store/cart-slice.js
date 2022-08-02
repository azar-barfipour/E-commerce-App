import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      console.log(state.items);
      const existingItems = state.items?.find((item) => item.id === newItem.id);
      if (!existingItems) {
        if (newItem.quantity === undefined) {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            totalPrice: newItem.price,
            quantity: 1,
            name: newItem.title,
          });
          state.totalQuantity++;
        } else {
          state.items.push({
            id: newItem.id,
            price: newItem.price,
            totalPrice: newItem.price,
            quantity: newItem.quantity,
            name: newItem.title,
          });
          state.totalQuantity += newItem.quantity;
        }
      } else {
        if (newItem.quantity === undefined) {
          console.log(state.totalQuantity);
          existingItems.totalPrice += newItem.price;
          existingItems.quantity++;
          state.totalQuantity++;
        } else {
          existingItems.totalPrice += newItem.price * newItem.quantity;
          existingItems.quantity += newItem.quantity;
          state.totalQuantity += newItem.quantity;
        }
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice -= existingItems.price;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
