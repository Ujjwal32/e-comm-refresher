import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import data from "../../data.json";

const initialState = {
  loading: false,
  error: false,
  message: "",
  products: [],
  filter: [],
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  // const products = await axios.get(
  //   "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  // );
  return data.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // filter by category
    filterProduct: (state, action) => {
      console.log(state.products);
      const filteredProduct = state.products.filter((item) =>
        item.category.includes(action.payload)
      );
      state.filter = filteredProduct;
    },
    //filter by price
    filterByPrice: (state, action) => {
      if (action.payload === "high") {
        const hightToLow = state.products.sort((a, b) => {
          return b.price.slice(1) - a.price.slice(1);
        });
        state.filter = hightToLow;
      } else {
        const lowToHigh = state.products.sort((a, b) => {
          return a.price.slice(1) - b.price.slice(1);
        });
        state.filter = lowToHigh;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.product;
      state.filter = action.payload.product;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.error.message;
    });
  },
});

export const { filterProduct, filterByPrice } = productSlice.actions;
export default productSlice.reducer;
