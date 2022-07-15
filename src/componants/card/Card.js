import React, { Component } from "react";
import { CardStyel } from "./styles/card.styled";
import ProCartSvg from "../../Empty Cart.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, updateCart } from "../../store/cartSlice";

class Card extends Component {
  addToCart() {
    const isExist = this.props.cartItems.filter(
      (item) => item.id === this.props.product.id
    )[0];
    isExist
      ? this.props.updateCart(this.props.product)
      : this.props.addToCart(this.props.product);
  }
  render() {
    console.log(this.props.cartItems);
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
              <img
                src={ProCartSvg}
                alt="cart-logo"
                onClick={() => this.addToCart()}
              />
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
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = { addToCart, updateCart };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
