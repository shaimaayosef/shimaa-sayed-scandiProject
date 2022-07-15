import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    addToCart: (state, action) => {
      state.cartItems.push({
        ...action.payload,
        qty: 1,
      });
    },
    updateCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty++ } : item
      );
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 0 ? item.qty-- : item.qty }
          : item
      );
    },
    deletItem: (state, action) => {
      const { id } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      state.cartItems.splice(index, 1);
    },
  },
});

export const { setShowCart, addToCart, updateCart, removeFromCart, deletItem } =
  cartSlice.actions;

export default cartSlice.reducer;
