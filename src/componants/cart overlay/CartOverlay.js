import React, { Component } from "react";
import CartItem from "./CartItem";
import { CartOverlayStyel } from "./styles/cartOverlay.styled";
import { Link } from "react-router-dom";

export default class CartOverlay extends Component {
  render() {
    return (
      <>
        <div className="overlay"></div>
        <CartOverlayStyel>
          <div className="cart-overlay">
            <h3>
              My Bag, <span>3 items</span>
            </h3>
            <CartItem />
            <CartItem />
            <p>
              Total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              $200.00
            </p>
            <div className="ptn">
              <Link to="/cart" className="view-ptn">
                View bag
              </Link>
              <button className="check-ptn">CHECK OUT</button>
            </div>
          </div>
        </CartOverlayStyel>
      </>
    );
  }
}
