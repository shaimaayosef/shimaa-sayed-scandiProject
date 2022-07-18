import React, { Component } from "react";
import ProductView from "../components/product view/ProductView";
import { connect } from "react-redux";

class ProductDescriptionPage extends Component {
  render() {
    const product = this.props.categories[0].products.filter(
      (p) => p.id === this.props.match.params.id
    )[0];

    return (
      <div>
        <ProductView
          product={product}
          selectedCurrency={this.props.selectedCurrency.i}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  selectedCurrency: state.currency.selectedCurrency,
  categories: state.categories,
});
export default connect(mapStateToProps)(ProductDescriptionPage);
