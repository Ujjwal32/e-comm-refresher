import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      if (action.payload === "open") {
        state.showCart = true;
      } else {
        state.showCart = false;
      }
    },
    addToCart: (state, action) => {
      state.showCart = true;
      state.cartItems = state.cartItems.concat(action.payload);
    },
  },
});

export const { toggleCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
