import React, { Component } from "react";
import { CardStyel } from "./styles/card.styled";
import ProCartSvg from "../../Empty Cart.svg";

export default class Card extends Component {
  render() {
    return (
      <CardStyel>
        <div className="pro-card">
          <img src="/Image.png" alt="product-pic" className="product-img" />
          <div className="cart-badge">
            <div className="c-img">
              <img src={ProCartSvg} alt="cart-logo" />
            </div>
          </div>
          <p className="product-name">product name</p>
          <h3 className="price">$50.00</h3>
        </div>
      </CardStyel>
    );
  }
}
