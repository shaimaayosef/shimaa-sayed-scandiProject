import React, { Component } from "react";
import { NavStyle } from "./styles/Nav.styled";
import cartSvg from "../../EmptyCart.svg";
import logotSvg from "../../a-logo.svg";
import arrow from "../../Vector.svg";
import arrowUp from "../../Vectorup.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ubdateCurrency } from "../../store/currencySlice";
import {
  setShowCart,
  setShowCurrency,
  setActiveCategory,
} from "../../store/cartSlice";

class Navbar extends Component {
  openCurrencyList() {
    this.props.setShowCurrency(!this.props.showCurrency);
  }
  handleItemClick(index) {
    this.props.setActiveCategory(index);
  }

  render() {
    return (
      <NavStyle>
        <nav>
          <ul className="catogeries">
            {this.props.categories.length > 0 &&
              this.props.categories.map((item, index) => (
                <li
                  key={index}
                  className={
                    this.props.activeCategory === index ? "active" : ""
                  }
                  onClick={this.handleItemClick.bind(this, index)}
                >
                  <Link to={"/" + item.name} className="nav-links">
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
          <Link to="/">
            <img
              src={logotSvg}
              alt="nav logo"
              className="nav-logo"
              onClick={this.handleItemClick.bind(this, 0)}
            />
          </Link>
          <div className="cart-logo">
            <div className="dropdown" onClick={() => this.openCurrencyList()}>
              <p className="dropbtn">
                {(this.props.currency.length > 0 &&
                  this.props.currency[this.props.selectedCurrency.i].symbol) ||
                  "$"}
              </p>
              <div
                className={`dropdown-content ${
                  this.props.showCurrency ? "" : "displayed"
                }`}
              >
                {this.props.currency.length > 0 &&
                  this.props.currency.map((x, i) => (
                    <option
                      key={i}
                      value={i}
                      onClick={() => {
                        this.props.ubdateCurrency({ i });
                        this.openCurrencyList();
                      }}
                      className="options"
                    >
                      {x.symbol} {x.label}
                    </option>
                  ))}
              </div>
              {this.props.showCurrency ? (
                <img src={arrow} alt="arrow" className="arrow" />
              ) : (
                <img src={arrowUp} alt="arrow" className="arrow" />
              )}
            </div>
            <div className="cart">
              <div className="badge">
                <span>
                  {this.props.cartItems.reduce(
                    (acc, item) => acc + item.qty,
                    0
                  )}
                </span>
              </div>
              <img
                src={cartSvg}
                alt="cart logo"
                className="cart-img"
                onClick={() => this.props.setShowCart(!this.props.showCart)}
              />
            </div>
          </div>
        </nav>
      </NavStyle>
    );
  }
}
const mapStateToProps = (state) => ({
  selectedCurrency: state.currency.selectedCurrency,
  showCart: state.cart.showCart,
  cartItems: state.cart.cartItems,
  showCurrency: state.cart.showCurrency,
  activeCategory: state.cart.activeCategory,
});

const mapDispatchToProps = {
  ubdateCurrency,
  setShowCart,
  setShowCurrency,
  setActiveCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
