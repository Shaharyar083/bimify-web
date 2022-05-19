import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleImage: true,
  search: "",
  category: "",
  cartProduct: [],
  productRatingAndReview: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setToggleImage: (state) => {
      state.toggleImage = !state.toggleImage;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    resetAllFilters: (state) => {
      state.search = "";
      state.category = "";
    },

    setCartProduct: (state, action) => {
      state.cartProduct = action.payload;
    },

    setRatingAndReview: (state, action) => {
      state.productRatingAndReview = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setToggleImage,
  setSearch,
  setCategory,
  resetAllFilters,
  setCartProduct,
  setRatingAndReview,
} = productSlice.actions;

export default productSlice.reducer;
