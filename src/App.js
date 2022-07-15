import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./componants/navbar/Navbar";
import CartOverlay from "./pages/CartOverlayPage";
import CartPage from "./pages/CartPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import All from "./pages/All";
import { gql } from "@apollo/client";
import { connect } from "react-redux";
import { getCategories } from "./store/categoriesSlice";
import { getCurrency } from "./store/currencySlice";
import Clothes from "./pages/Clothes";
import Tech from "./pages/Tech";
class App extends Component {
  render() {
    this.props.client
      .query({
        query: gql`
          query Getcategories {
            categories {
              name
              products {
                id
                name
                inStock
                gallery
                description
                category
                attributes {
                  id
                  name
                  type
                  items {
                    displayValue
                    value
                    id
                  }
                }
                prices {
                  currency {
                    label
                    symbol
                  }
                  amount
                }
                brand
              }
            }
          }
        `,
      })
      .then((result) => this.props.getCategories(result.data.categories));
    this.props.client
      .query({
        query: gql`
          query currencies {
            currencies {
              label
              symbol
            }
          }
        `,
      })
      .then((result) => this.props.getCurrency(result.data.currencies));

    const Wrapper = (props) => {
      const params = useParams();
      return <ProductDescriptionPage {...{ ...props, match: { params } }} />;
    };

    return (
      <div>
        <Navbar />
        {this.props.showCart && <CartOverlay />}
        <div>
          {this.props.categories.length > 0 ? (
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/clothes" element={<Clothes />} />
              <Route path="/tech" element={<Tech />} />
              <Route path="/all" element={<All />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/description/:id" element={<Wrapper />} />
            </Routes>
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  currency: state.currency.currency,
  showCart: state.cart.showCart,
});

const mapDispatchToProps = { getCategories, getCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(App);
