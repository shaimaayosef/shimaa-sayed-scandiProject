import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CartOverlay from "./components/cart overlay/CartOverlay";
import CartPage from "./pages/CartPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import { GET_CATEGORIES, GET_CURRENCIES } from "./queries/queries";
import { connect } from "react-redux";
import { getCategories } from "./store/categoriesSlice";
import { getCurrency } from "./store/currencySlice";
import { setShowCurrency } from "./store/cartSlice";
import Modal from "./components/modal/Modal";
import CategoryList from "./pages/CategoryList";
class App extends Component {
  render() {
    this.props.client
      .query({
        query: GET_CATEGORIES,
      })
      .then((result) => this.props.getCategories(result.data.categories));
    this.props.client
      .query({
        query: GET_CURRENCIES,
      })
      .then((result) => this.props.getCurrency(result.data.currencies));

    const Wrapper = (props) => {
      const params = useParams();
      return (
        <ProductDescriptionPage
          {...{ ...props, match: { params }, client: this.props.client }}
        />
      );
    };

    const CategoryWrapper = (props) => {
      const params = useParams();
      return (
        <CategoryList
          {...{ ...props, match: { params }, client: this.props.client }}
        />
      );
    };
    return (
      <div>
        {this.props.showCurrency || (
          <div
            className="modal-currency"
            onClick={() => this.props.setShowCurrency(!this.props.showCurrency)}
          ></div>
        )}
        <Navbar
          categories={this.props.categories}
          currency={this.props.currency}
        />
        {this.props.showCart && <CartOverlay />}
        {this.props.showModal && <Modal />}
        <div>
          {this.props.categories.length > 0 ? (
            <Routes>
              <Route path="/" element={<CategoryWrapper />} />
              <Route path="/:category" element={<CategoryWrapper />} />
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
  categories: state.categories.categories,
  currency: state.currency.currency,
  showCart: state.cart.showCart,
  showModal: state.cart.showModal,
  showCurrency: state.cart.showCurrency,
});

const mapDispatchToProps = { getCategories, getCurrency, setShowCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(App);
