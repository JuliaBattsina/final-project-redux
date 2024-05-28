import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import plantsReducer from "./plantSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  plants: plantsReducer,
});

export default rootReducer;
