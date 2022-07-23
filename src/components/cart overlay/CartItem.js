import React, { Component } from "react";
import { CartItemStyel } from "./styles/cartOverlay.styled";
import MinusSvg from "../../minus-squ.svg";
import AddSvg from "../../plus-squ.svg";
import {
  removeFromCart,
  updateCart,
  deletItem,
  updateProduct,
} from "../../store/cartSlice";
import { connect } from "react-redux";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: this.props.item.selectedColor,
      selectedSize: this.props.item.selectedSize,
      selectedCapasity: this.props.item.selectedCapasity,
    };
  }
  componentDidUpdate() {
    localStorage.setItem("cartItems", JSON.stringify(this.props.cartItems));
  }
  removeItem() {
    this.props.item.qty === 1
      ? this.props.deletItem(this.props.id)
      : this.props.removeFromCart(this.props.id);
  }
  addProToCart(attr, value) {
    this.props.updateProduct({
      ...this.props.item,
      selectedSize:
        attr === "selectedSize" ? value : this.props.item.selectedSize,
      selectedColor:
        attr === "selectedColor" ? value : this.props.item.selectedColor,
      selectedCapasity:
        attr === "selectedCapasity" ? value : this.props.item.selectedCapasity,
      index: this.props.id,
    });
  }
  render() {
    return (
      <CartItemStyel>
        <div className="cart-item">
          <div className="product-info">
            <h2>{this.props.item.brand}</h2>
            <h2>{this.props.item.name}</h2>
            <div className="price">
              <span>
                {
                  this.props.item.prices[this.props.selectedCurrency].currency
                    .symbol
                }
                {this.props.item.prices[this.props.selectedCurrency].amount}
              </span>
            </div>
            <div className="attributes">
              {this.props.item.attributes
                .filter((a) => a.id === "Size")
                .map((d, i) => (
                  <div className="size" key={i}>
                    <h4>Size:</h4>
                    <div className="size-box">
                      {d.items.map((size, i) => (
                        <div
                          key={i}
                          className={`size-x ${
                            this.props.item.selectedSize === i ? "selected" : ""
                          }`}
                          onClick={() => {
                            this.setState((prevState) => ({
                              ...prevState,
                              selectedSize: i,
                            }));
                            this.addProToCart("selectedSize", i);
                          }}
                        >
                          {size.value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              {this.props.item.attributes
                .filter((a) => a.id === "Capacity")
                .map((d, i) => (
                  <div className="size" key={i}>
                    <h4>Capacity:</h4>
                    <div className="size-box">
                      {d.items.map((capacity, i) => (
                        <div
                          key={i}
                          className={`size-x ${
                            this.props.item.selectedCapasity === i
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => {
                            this.setState((prevState) => ({
                              ...prevState,
                              selectedCapasity: i,
                            }));
                            this.addProToCart("selectedCapasity", i);
                          }}
                        >
                          {capacity.value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              {this.props.item.attributes
                .filter((a) => a.id === "Color")
                .map((d, i) => (
                  <div className="color" key={i}>
                    <h4>Color:</h4>
                    <div className="color-box">
                      {d.items.map((color, i) => (
                        <div
                          key={i}
                          className={`color-x ${
                            this.props.item.selectedColor === i
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => {
                            this.setState((prevState) => ({
                              ...prevState,
                              selectedColor: i,
                            }));
                            this.addProToCart("selectedColor", i);
                          }}
                          style={{ backgroundColor: `${color.value}` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="product-count">
            <div className="inc">
              <img
                src={AddSvg}
                alt="plus"
                onClick={() => {
                  this.props.updateCart(this.props.id);
                }}
              />
            </div>
            <span>{this.props.item.qty}</span>
            <div className="dec">
              <img
                src={MinusSvg}
                alt="minus"
                onClick={() => this.removeItem()}
              />
            </div>
          </div>
          <div className="pro-img">
            <img
              src={this.props.item.gallery[0]}
              alt={this.props.item.id}
              className="product-img"
            />
          </div>
        </div>
      </CartItemStyel>
    );
  }
}
const mapStateToProps = (state) => ({
  showCart: state.cart.showCart,
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = {
  removeFromCart,
  updateCart,
  deletItem,
  updateProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
