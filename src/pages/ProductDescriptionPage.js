import React, { Component } from "react";
import ProductView from "../components/product view/ProductView";
import { connect } from "react-redux";
import { GET_PRODUCT } from "../queries/queries";

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.client
      .query({
        query: GET_PRODUCT,
        variables: { id: this.props.match.params.id },
      })
      .then((result) => this.setState({ product: result.data.product }));
  }
  render() {
    return (
      <div>
        {this.state.product ? (
          <ProductView
            product={this.state.product}
            selectedCurrency={this.props.selectedCurrency.i}
          />
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  selectedCurrency: state.currency.selectedCurrency,
  categories: state.categories.categories,
});
export default connect(mapStateToProps)(ProductDescriptionPage);
