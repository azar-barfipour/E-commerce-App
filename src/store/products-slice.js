import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      state.items.push({
        title: newItem.title,
        description: newItem.desc,
        price: newItem.price,
      });
    },
    updateItems(state, action) {},
    removeItems(state, action) {},
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
