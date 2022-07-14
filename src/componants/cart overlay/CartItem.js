import React, { Component } from "react";
import { CartItemStyel } from "./styles/cartOverlay.styled";
import MinusSvg from "../../minus-squ.svg";
import AddSvg from "../../plus-squ.svg";

export default class CartItem extends Component {
  render() {
    return (
      <CartItemStyel>
        <div className="cart-item">
          <div className="product-info">
            <h2>Apollo</h2>
            <h2>Running Short</h2>
            <div className="price">
              <span>$50.00</span>
            </div>
            <div className="size">
              <h4>size:</h4>
              <div className="size-box">
                <div className="size-x">xs</div>
                <div className="size-x">m</div>
                <div className="size-x">l</div>
                <div className="size-x">xl</div>
              </div>
            </div>
            <div className="color">
              <h4>color:</h4>
              <div className="color-box">
                <div className="color-x"></div>
                <div className="color-x"></div>
                <div className="color-x"></div>
              </div>
            </div>
          </div>
          <div className="product-count">
            <div className="inc">
              <img src={AddSvg} alt="minus" />
            </div>
            <span>1</span>
            <div className="dec">
              <img src={MinusSvg} alt="plus" />
            </div>
          </div>
          <div className="pro-img">
            <img src="/Image.png" alt="product-img" className="product-img" />
          </div>
        </div>
      </CartItemStyel>
    );
  }
}
