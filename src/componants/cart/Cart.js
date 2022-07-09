import React, { Component } from "react";
import ProductCart from "./ProductCart";
import { CartStyle } from "./styles/Cart.styeld";

export default class Cart extends Component {
  render() {
    return (
      <CartStyle>
        <div className="cart-co">
          <h1>Cart</h1>
          <ProductCart />
          <ProductCart />
          <div className="order">
            <p>
              Tax 21%: <span>$42.00</span>
            </p>
            <p>
              Quantity: <span>3</span>
            </p>
            <p>
              Total: <span>$200.00</span>
            </p>
            <button className="order-ptn">order</button>
            <div></div>
          </div>
        </div>
      </CartStyle>
    );
  }
}
