import "./cart.scss";
import React, { Component } from "react";
import PrevArrowSvg from "../../Group 1417.svg";
import AfterArrowSvg from "../../Group 1418.svg";
import MinusSvg from "../../minus-square.svg";
import AddSvg from "../../plus-square.svg";

export default class ProductCart extends Component {
  render() {
    return (
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
            <img src={MinusSvg} alt="minus" />
          </div>
          <span>1</span>
          <div className="decrese">
            <img src={MinusSvg} alt="plus" />
          </div>
        </div>
        <div className="pro-img">
          <div className="product-img">
            <img src="/Image.png" alt="product-img" />
          </div>
          <div className="prev">
            <img src={PrevArrowSvg} alt="prev" />
          </div>
          <div className="after">
            <img src={AfterArrowSvg} alt="after" />
          </div>
        </div>
      </div>
    );
  }
}
