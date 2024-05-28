import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./plantSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    plants: plantReducer,
    cart: cartReducer,
  },
});

export default store;
