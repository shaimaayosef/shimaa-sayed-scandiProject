import React, { Component } from "react";
import { CartItemStyle } from "./styles/cartOverlay.styled";
import MinusSvg from "../../minus-squ.svg";
import AddSvg from "../../plus-squ.svg";
import { removeFromCart, updateCart, deletItem } from "../../store/cartSlice";
import { connect } from "react-redux";

class CartItem extends Component {
  componentDidUpdate() {
    localStorage.setItem("cartItems", JSON.stringify(this.props.cartItems));
  }
  removeItem() {
    this.props.item.qty === 1
      ? this.props.deletItem(this.props.id)
      : this.props.removeFromCart(this.props.id);
  }

  render() {
    return (
      <CartItemStyle>
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
                .filter((atr) => atr.id !== "Color")
                .map((d, i) => (
                  <div className="size" key={i}>
                    <h4>{d.id}:</h4>
                    <div className="size-box">
                      {d.items.map((size, i) => (
                        <div
                          key={i}
                          className={`size-x ${
                            this.props.item.selectedAttributes[d.id] === i
                              ? "selected"
                              : ""
                          } ${
                            this.props.item.selectedAttributes[d.id] ===
                              undefined && i === 0
                              ? "selected"
                              : ""
                          }`}
                        >
                          {size.value}
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
                            this.props.item.selectedAttributes.selectedColor ===
                            i
                              ? "selected"
                              : ""
                          }`}
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
                  this.props.updateCart(this.props.item.key);
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
      </CartItemStyle>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
