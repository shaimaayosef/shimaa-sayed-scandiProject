import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componants/navbar/Navbar";
import CartOverlayPage from "./pages/CartOverlayPage";
import CartPage from "./pages/CartPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductList from "./pages/ProductList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/discription" element={<ProductDescriptionPage />} />
          <Route path="/CartOverlayPage" element={<CartOverlayPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
