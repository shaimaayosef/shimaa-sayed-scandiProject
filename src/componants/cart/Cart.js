import React, { Component } from "react";
import ProductCart from "./ProductCart";
import { CartStyle } from "./styles/Cart.styeld";
import { connect } from "react-redux";
import { setShowCart } from "../../store/cartSlice";
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
              />
            ))
          ) : (
            <p>nothing here ediot</p>
          )}
          <div className="order">
            <p>
              Tax 21%: <span>$42.00</span>
            </p>
            <p>
              Quantity:
              <span>
                {this.props.cartItems.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            </p>
            <p>
              Total:
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
            <button className="order-ptn">order</button>
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
});
const mapDispatchToProps = { setShowCart };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
