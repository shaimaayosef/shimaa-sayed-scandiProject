import { CartStyle } from "./styles/Cart.styeld";
import React, { Component } from "react";
import PrevArrowSvg from "../../Group 1417.svg";
import AfterArrowSvg from "../../Group 1418.svg";
import MinusSvg from "../../minus-square.svg";
import AddSvg from "../../plus-square.svg";
import { Link } from "react-router-dom";
import { removeFromCart, updateCart, deletItem } from "../../store/cartSlice";
import { connect } from "react-redux";

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      src: this.props.item.gallery[0],
    };
  }
  after() {
    this.setState((prev) => ({
      ...prev,
      index:
        prev.index === this.props.item.gallery.length - 1
          ? prev.index
          : prev.index + 1,
    }));
  }
  previous() {
    this.setState((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.index : prev.index - 1,
    }));
  }
  removeItem() {
    this.props.item.qty === 1
      ? this.props.deletItem(this.props.item)
      : this.props.removeFromCart(this.props.item);
  }
  render() {
    console.log(this.state.index);
    return (
      <CartStyle>
        <div className="productCart">
          <div className="product-info">
            <h2>{this.props.item.brand}</h2>
            <h3>{this.props.item.name}</h3>
            <div className="price">
              <span>
                {" "}
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
                        <div className="size-x" key={i}>
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
                        <div key={i} className="size-x">
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
                          className="color-x"
                          style={{ backgroundColor: `${color.value}` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="product-count">
            <div className="increse">
              <img
                src={AddSvg}
                alt="plus"
                onClick={() => this.props.updateCart(this.props.item)}
              />
            </div>
            <span>{this.props.item.qty}</span>
            <div className="decrese">
              <img
                src={MinusSvg}
                alt="minus"
                onClick={() => this.removeItem()}
              />
            </div>
          </div>
          <div className="pro-img">
            <Link to={`/description/${this.props.item.id}`}>
              <img
                src={this.props.item.gallery[this.state.index]}
                alt={this.props.item.id}
                className="product-img"
              />
            </Link>
            <div className="changing-box">
              <img
                src={PrevArrowSvg}
                alt="prev"
                className="prev"
                onClick={() => this.previous()}
              />
              <img
                src={AfterArrowSvg}
                alt="after"
                className="after"
                onClick={() => this.after()}
              />
            </div>
          </div>
        </div>
      </CartStyle>
    );
  }
}
const mapStateToProps = (state) => ({
  showCart: state.cart.showCart,
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = { removeFromCart, updateCart, deletItem };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
