import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componants/navbar/Navbar";
import CartOverlayPage from "./pages/CartOverlayPage";
import CartPage from "./pages/CartPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductList from "./pages/ProductList";
import { gql } from "@apollo/client";

class App extends Component {
  render() {
    this.props.client
      .query({
        query: gql`
          query Getcategories {
            categories {
              name
              products {
                name
                gallery
                prices {
                  amount
                }
              }
            }
          }
        `,
      })
      .then((result) => console.log(result));
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
