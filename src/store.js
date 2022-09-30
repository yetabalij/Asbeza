import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import historyReducer from "./features/historySlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    history: historyReducer,
  },
});
