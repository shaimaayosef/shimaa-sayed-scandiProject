import React, { Component } from "react";
import { CardStyel } from "./styles/card.styled";
import ProCartSvg from "../../Empty Cart.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <CardStyel>
        <div className="pro-card">
          <Link to={`/description/${this.props.product.id}`}>
            <img
              src={this.props.product.gallery[0]}
              alt="product-pic"
              className="product-img"
            />
          </Link>
          <div className="cart-badge">
            <div className="c-img">
              <img src={ProCartSvg} alt="cart-logo" />
            </div>
          </div>
          <p className="product-name">{this.props.product.name}</p>
          <h3 className="price">
            {this.props.product.prices[this.props.selectedCurrency.i].amount}
            {
              this.props.product.prices[this.props.selectedCurrency.i].currency
                .symbol
            }
          </h3>
        </div>
      </CardStyel>
    );
  }
}
const mapStateToProps = (state) => ({
  selectedCurrency: state.currency.selectedCurrency,
});

export default connect(mapStateToProps)(Card);
