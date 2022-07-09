import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: [],
  selectedCurrency: { i: 0 },
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    getCurrency: (state, action) => {
      state.currency = action.payload;
    },
    ubdateCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { getCurrency, ubdateCurrency } = currencySlice.actions;

export default currencySlice.reducer;
