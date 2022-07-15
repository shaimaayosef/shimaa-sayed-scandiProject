import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import currencyReducer from "./currencySlice";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    currency: currencyReducer,
    cart: cartReducer,
  },
});
