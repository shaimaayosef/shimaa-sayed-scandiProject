import React, { Component } from "react";
import CartItem from "./CartItem";
import { CardOverlayStyel } from "./styles/cardOverlay.styled";

export default class CartOverlay extends Component {
  render() {
    return (
      <CardOverlayStyel>
        <div className="overlay">
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
              <button className="view-ptn">View bag</button>
              <button className="check-ptn">CHECK OUT</button>
            </div>
          </div>
        </div>
      </CardOverlayStyel>
    );
  }
}