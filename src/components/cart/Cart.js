import React, { Component } from "react";
import ProductCart from "./ProductCart";
import { CartStyle } from "./styles/Cart.styeld";
import { connect } from "react-redux";
import { setShowModal, setShowCart } from "../../store/cartSlice";
class Cart extends Component {
  render() {
    return (
      <CartStyle>
        <div className="cart-co">
          <h1>Cart</h1>
          {this.props.cartItems.length > 0 ? (
            this.props.cartItems.map((item, i) => (
              <ProductCart
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
          <div className="order">
            <p>
              Tax 21%:&nbsp; &nbsp;
              <span>
                {(this.props.currency.length > 0 &&
                  this.props.currency[this.props.selectedCurrency.i].symbol) ||
                  "$"}
                {this.props.cartItems.length > 0 &&
                  this.props.cartItems
                    .reduce(
                      (acc, item) =>
                        acc +
                        (item.prices[this.props.selectedCurrency.i].amount *
                          item.qty *
                          21) /
                          100,
                      0
                    )
                    .toFixed(2)}
              </span>
            </p>
            <p>
              Quantity:&nbsp;
              <span>
                {this.props.cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </p>
            <p className="total">
              Total:&nbsp; &nbsp; &nbsp; &nbsp;
              <span>
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
              </span>
            </p>
            <button
              className="order-btn"
              onClick={() => {
                this.props.setShowModal(true);
                this.props.setShowCart(false);
              }}
            >
              order
            </button>
            <div></div>
          </div>
        </div>
      </CartStyle>
    );
  }
}
const mapStateToProps = (state) => ({
  showCart: state.cart.showCart,
  cartItems: state.cart.cartItems,
  selectedCurrency: state.currency.selectedCurrency,
  currency: state.currency.currency,
  showModal: state.cart.showModal,
});
const mapDispatchToProps = { setShowModal, setShowCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
