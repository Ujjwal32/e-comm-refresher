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
    showTotalPriceAndAmount: (state, action) => {
      const price = state.cartItems.reduce((acc, curr) => {
        acc += curr.totalPrice;
        return acc;
      }, 0);

      const number = state.cartItems.reduce((acc, curr) => {
        acc += curr.quantity;
        return acc;
      }, 0);

      state.totalprice = price;
      state.totalnumber = number;
    },
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
      state.totalnumber = state.totalnumber + itemInCart.quantity;
    },
    changeQuantity: (state, action) => {
      const id = action.payload.id;
      const selected_item = state.cartItems.find((item) => item.id === id);
      const initialPrice = selected_item.price.slice(1);
      action.payload.action === "inc"
        ? ++selected_item.quantity
        : --selected_item.quantity;
      selected_item.totalPrice = Number(selected_item.quantity) * initialPrice;
      state.totalprice = state.totalprice + selected_item.totalPrice;
      state.totalnumber = state.totalnumber + selected_item.quantity;
    },
  },
});

export const {
  toggleCart,
  addToCart,
  changeQuantity,
  showTotalPriceAndAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
