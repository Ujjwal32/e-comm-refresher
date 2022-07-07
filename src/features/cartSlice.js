import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  totalnumber: 0,
  totalprice: 0,
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
      const itemInCart = {
        ...action.payload,
        quantity: 1,
        totalPrice: parseInt(action.payload.price.slice(1)),
      };
      state.cartItems = state.cartItems.concat(itemInCart);
      state.totalprice = state.totalprice + itemInCart.totalPrice;
      state.totalnumber = ++state.totalnumber;
    },
    changeQuantity: (state, action) => {
      const id = action.payload.id;
      const selected_item = state.cartItems.find((item) => item.id === id);
      const price = parseInt(selected_item.price.slice(1));
      if (action.payload.action === "inc") {
        ++selected_item.quantity;
        state.totalprice = state.totalprice + price;
        state.totalnumber = state.totalnumber + 1;
      } else {
        --selected_item.quantity;
        state.totalprice = state.totalprice - price;
        state.totalnumber = state.totalnumber - 1;
      }
    },
  },
});

export const { toggleCart, addToCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
