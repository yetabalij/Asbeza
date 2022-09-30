import { createSlice } from "@reduxjs/toolkit";
import data from "./../products.json";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "prduct",
  initialState,
  reducers: {
    getData: (state) => {
      return { products: [...state, data] };
    },
  },
});

export const { getData } = productSlice.actions;
export default productSlice.reducer;
