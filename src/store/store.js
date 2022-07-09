import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import currencyReducer from "./currencySlice";
export const store = configureStore({
  reducer: { categories: categoriesReducer, currency: currencyReducer },
});
