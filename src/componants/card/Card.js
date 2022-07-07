import React, { Component } from "react";
import { CardStyel } from "./styles/card.styled";
import ProCartSvg from "../../Empty Cart.svg";

export default class Card extends Component {
  render() {
    console.log(this.props.product);
    return (
      <CardStyel>
        <div className="pro-card">
          <img
            src={this.props.product.gallery[0]}
            alt="product-pic"
            className="product-img"
          />
          <div className="cart-badge">
            <div className="c-img">
              <img src={ProCartSvg} alt="cart-logo" />
            </div>
          </div>
          <p className="product-name">{this.props.product.name}</p>
          <h3 className="price">
            {this.props.product.prices[1].amount}
            {this.props.product.prices[1].currency.symbol}
          </h3>
        </div>
      </CardStyel>
    );
  }
}
