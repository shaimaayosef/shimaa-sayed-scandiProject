import React, { Component } from "react";
import { NavStyle } from "./styles/Nav.styled";
import cartSvg from "../../EmptyCart.svg";
import logotSvg from "../../a-logo.svg";
import arrow from "../../Vector.svg";
import arrowUp from "../../Vectorup.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ubdateCurrency } from "../../store/currencySlice";
import { setShowCart } from "../../store/cartSlice";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: -1,
      isOpen: true,
    };
  }

  openCurrencyList() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }
  handleItemClick(index) {
    this.setState({
      activeItem: index,
    });
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
                  className={this.state.activeItem === index ? "active" : ""}
                  onClick={this.handleItemClick.bind(this, index)}
                >
                  <Link to={"/" + item.name} className="nav-links">
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
          <Link to="/">
            <img src={logotSvg} alt="nav logo" className="nav-logo" />
          </Link>
          <div className="cart-logo">
            <div className="dropdown">
              <p className="dropbtn">
                {this.props.selectedCurrency.symbol || "$"}
              </p>
              <div
                className={`dropdown-content ${
                  this.state.isOpen ? "" : "displayed"
                }`}
              >
                {this.props.currency.length > 0 &&
                  this.props.currency.map((x, i) => (
                    <option
                      key={i}
                      value={i}
                      onClick={(e) => {
                        this.props.ubdateCurrency({ i });
                      }}
                      className="options"
                    >
                      {x.symbol} {x.label}
                    </option>
                  ))}
              </div>
            </div>
            {this.state.isOpen ? (
              <img
                src={arrow}
                alt="arrow"
                className="arrow"
                onClick={() => this.openCurrencyList()}
              />
            ) : (
              <img
                src={arrowUp}
                alt="arrow"
                className="arrow"
                onClick={() => this.openCurrencyList()}
              />
            )}
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
  currency: state.currency.currency,
  selectedCurrency: state.currency.selectedCurrency,
  categories: state.categories,
  showCart: state.cart.showCart,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = { ubdateCurrency, setShowCart };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
