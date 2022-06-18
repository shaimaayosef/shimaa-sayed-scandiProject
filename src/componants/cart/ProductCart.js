import { CartStyle } from "./styles/Cart.styeld";
import React, { Component } from "react";
import PrevArrowSvg from "../../Group 1417.svg";
import AfterArrowSvg from "../../Group 1418.svg";
import MinusSvg from "../../minus-square.svg";
import AddSvg from "../../plus-square.svg";

export default class ProductCart extends Component {
  render() {
    return (
      <CartStyle>
        <div className="productCart">
          <div className="product-info">
            <h2>Apollo</h2>
            <h3>Running Short</h3>
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
            <div className="increse">
              <img src={AddSvg} alt="minus" />
            </div>
            <span>1</span>
            <div className="decrese">
              <img src={MinusSvg} alt="plus" />
            </div>
          </div>
          <div className="pro-img">
            <img src="/Image.png" alt="product-img" className="product-img" />
            <div className="changing-box">
              <img src={PrevArrowSvg} alt="prev" className="prev" />
              <img src={AfterArrowSvg} alt="after" className="after" />
            </div>
          </div>
        </div>
      </CartStyle>
    );
  }
}
