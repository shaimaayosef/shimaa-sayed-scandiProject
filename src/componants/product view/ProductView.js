import { ProductViewStyle } from "./styles/ProductView.styled";
import React, { Component } from "react";

export default class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.product.gallery[0],
    };
  }

  changeImg(src) {
    this.setState((prevState) => ({
      src: src,
    }));
  }
  render() {
    console.log(this.props.product);
    const description = this.props.product.description;
    return (
      <ProductViewStyle>
        <div className="ProductView">
          <div className="product-images">
            {this.props.product.gallery.map((picture) => (
              <img
                src={picture}
                alt={this.props.product.name}
                key={this.props.product.id}
                onClick={this.changeImg.bind(this, picture)}
              />
            ))}
          </div>
          <div className="Photo-Gallery">
            <img src={this.state.src} alt={this.props.product.name} />
          </div>
          <div className="product-info">
            <h2>{this.props.product.brand}</h2>
            <h3>{this.props.product.name}</h3>
            {this.props.product.attributes
              .filter((a) => a.id === "Size")
              .map((d) => (
                <div className="size">
                  <h4>Size:</h4>
                  <div className="size-box">
                    {d.items.map((size) => (
                      <div className="size-x">{size.value}</div>
                    ))}
                  </div>
                </div>
              ))}
            {this.props.product.attributes
              .filter((a) => a.id === "Capacity")
              .map((d) => (
                <div className="size">
                  <h4>Capacity:</h4>
                  <div className="size-box">
                    {d.items.map((capacity) => (
                      <div className="size-x">{capacity.value}</div>
                    ))}
                  </div>
                </div>
              ))}
            {this.props.product.attributes
              .filter((a) => a.id === "Color")
              .map((d) => (
                <div className="color">
                  <h4>Color:</h4>
                  <div className="color-box">
                    {d.items.map((color) => (
                      <div
                        className="color-x"
                        style={{ backgroundColor: `${color.value}` }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            <div className="price">
              <h4 className="price">price:</h4>
              <span>
                {
                  this.props.product.prices[this.props.selectedCurrency]
                    .currency.symbol
                }
                {this.props.product.prices[this.props.selectedCurrency].amount}
              </span>
            </div>

            <button className="add">add to card</button>
            <p
              className="descreption"
              //This dangerouslySetInnerHTML is dangerous, but since we do not take from users, but rather from the back-end, it will not be dangerous because the back-end is reliable.
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </ProductViewStyle>
    );
  }
}
