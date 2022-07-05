import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: false,
  message: "",
  products: [],
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const products = await axios.get(
    "https://electronic-ecommerce.herokuapp.com/api/v1/product"
  );
  return products.data.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.product;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.message = action.error.message;
    });
  },
});

export default productSlice.reducer;
