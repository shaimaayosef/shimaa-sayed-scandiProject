import { ProductViewStyle } from "./styles/ProductView.styled";
import React, { Component } from "react";
// import ProCartSvg from "../../Empty Cart.svg";

export default class ProductView extends Component {
  // onClick = () => {
  //   console.log("this is a function");
  // };
  // constructor(props) {
  //   super(props);
  //   this.state = { date: new Date() };
  // }
  render() {
    return (
      <ProductViewStyle>
        <div className="ProductView">
          <div className="product-images">
            <img src="/Image.png" alt="img1" />
            <img src="/Image.png" alt="img1" />
            <img src="/Image.png" alt="img1" />
          </div>
          <div className="Photo-Gallery">
            <img src="/Image.png" alt="img1" />
          </div>
          <div className="product-info">
            <h2>Apollo</h2>
            <h3>Running Short</h3>
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
            <div className="price">
              <h4 className="price">price:</h4>
              <span>$50.00</span>
            </div>

            <button className="add">add to card</button>
            <p className="descreption">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </div>
        </div>
      </ProductViewStyle>
    );
  }
}
