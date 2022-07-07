import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./componants/navbar/Navbar";
import CartOverlayPage from "./pages/CartOverlayPage";
import CartPage from "./pages/CartPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import All from "./pages/All";
import { gql } from "@apollo/client";
import { connect } from "react-redux";
import { getCategories } from "./store/categoriesSlice";
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
                  currency {
                    label
                    symbol
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => this.props.getCategories(result.data.categories));
    console.log(this.props.categories);
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/discription" element={<ProductDescriptionPage />} />
          <Route path="/CartOverlayPage" element={<CartOverlayPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = { getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(App);
