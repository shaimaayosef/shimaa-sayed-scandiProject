import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  showCart: false,
  showModal: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setShowCart: (state, action) => {
      state.showCart = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    resetCart: (state, action) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      state.cartItems.push({
        ...action.payload,
        qty: 1,
      });
    },
    updateCart: (state, action) => {
      const id = action.payload;
      state.cartItems.map((item, i) =>
        i === id ? { ...item, qty: item.qty++ } : item
      );
    },
    updateProduct: (state, action) => {
      const id = action.payload.index;
      console.log(action.payload);
      state.cartItems.splice(id, 1, action.payload);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems.map((item, i) =>
        i === id ? { ...item, qty: item.qty > 0 ? item.qty-- : item.qty } : item
      );
    },
    deletItem: (state, action) => {
      const id = action.payload;
      state.cartItems.splice(id, 1);
    },
  },
});

export const {
  setShowCart,
  addToCart,
  updateCart,
  removeFromCart,
  deletItem,
  updateProduct,
  setShowModal,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
