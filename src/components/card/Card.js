import React, { Component } from "react";
import { CardStyel } from "./styles/card.styled";
import ProCartSvg from "../../Empty Cart.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";

class Card extends Component {
  addProToCart() {
    this.props.addToCart(this.props.product);
  }
  componentDidUpdate() {
    localStorage.setItem("cartItems", JSON.stringify(this.props.cartItems));
  }
  render() {
    return (
      <CardStyel>
        <div className="pro-card">
          {this.props.product.inStock || (
            <Link to={`/description/${this.props.product.id}`}>
              <div className="outStock">out of stock</div>
            </Link>
          )}
          <Link to={`/description/${this.props.product.id}`}>
            <img
              src={this.props.product.gallery[0]}
              alt={this.props.product.id}
              className="product-img"
            />
          </Link>
          {this.props.product.inStock && (
            <div className="cart-badge">
              <div className="c-img">
                <img
                  src={ProCartSvg}
                  alt="cart-logo"
                  onClick={() => this.addProToCart()}
                />
              </div>
            </div>
          )}
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
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
