import React, { Component } from "react";
import CartItem from "./CartItem";
import { CartOverlayStyel } from "./styles/cartOverlay.styled";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setShowCart, setShowModal } from "../../store/cartSlice";

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
              My Bag, &nbsp;
              <span>
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                  {this.props.cartItems.reduce(
                    (acc, item) => acc + item.qty,
                    0
                  )}
                </span>
                &nbsp; items
              </span>
            </h3>
            {this.props.cartItems.length > 0 ? (
              this.props.cartItems.map((item, i) => (
                <CartItem
                  key={i}
                  item={item}
                  selectedCurrency={this.props.selectedCurrency.i}
                  currency={this.props.currency}
                  id={i}
                />
              ))
            ) : (
              <p>cart is empty</p>
            )}
            {this.props.cartItems.length > 0 && (
              <>
                <p>
                  Total &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <span>
                    {(this.props.currency.length > 0 &&
                      this.props.currency[this.props.selectedCurrency.i]
                        .symbol) ||
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
                  </span>
                </p>

                <div className="btn">
                  <Link
                    to="/cart"
                    className="view-btn"
                    onClick={() => this.props.setShowCart(false)}
                  >
                    View bag
                  </Link>
                  <button
                    className="check-btn"
                    onClick={() => {
                      this.props.setShowModal(true);
                      this.props.setShowCart(false);
                    }}
                  >
                    CHECK OUT
                  </button>
                </div>
              </>
            )}
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
const mapDispatchToProps = { setShowCart, setShowModal };

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
