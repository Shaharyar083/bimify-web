import { configureStore } from "@reduxjs/toolkit";
import { userSlice, productSlice } from "../reducers";

export const store = configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
  },
});
