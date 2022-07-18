import React, { Component } from "react";
import CartItem from "./CartItem";
import { CartOverlayStyel } from "./styles/cartOverlay.styled";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setShowCart } from "../../store/cartSlice";

class CartOverlay extends Component {
  render() {
    return (
      <>
        <div
          className="overlay"
          onClick={() => this.props.setShowCart(false)}
        ></div>
        <CartOverlayStyel>
          <div className="cart-overlay">
            <h3>
              My Bag,
              <span>
                {this.props.cartItems.reduce((acc, item) => acc + item.qty, 0)}
                items
              </span>
            </h3>
            {this.props.cartItems.length > 0 ? (
              this.props.cartItems.map((item, i) => (
                <CartItem
                  key={i}
                  item={item}
                  selectedCurrency={this.props.selectedCurrency.i}
                  currency={this.props.currency}
                />
              ))
            ) : (
              <p>nothing here ediot</p>
            )}
            <p>
              Total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              {(this.props.currency.length > 0 &&
                this.props.currency[this.props.selectedCurrency.i].symbol) ||
                "$"}
              {this.props.cartItems.length > 0 &&
                this.props.cartItems
                  .reduce(
                    (acc, item) =>
                      acc +
                      item.prices[this.props.selectedCurrency.i].amount *
                        item.qty,
                    0
                  )
                  .toFixed(2)}
            </p>
            <div className="ptn">
              <Link
                to="/cart"
                className="view-ptn"
                onClick={() => this.props.setShowCart(false)}
              >
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
const mapStateToProps = (state) => ({
  showCart: state.cart.showCart,
  cartItems: state.cart.cartItems,
  selectedCurrency: state.currency.selectedCurrency,
  currency: state.currency.currency,
});
const mapDispatchToProps = { setShowCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
