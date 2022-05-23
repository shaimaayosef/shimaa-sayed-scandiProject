import React, { Component } from "react";
import "./navbar.scss";
import cartSvg from "../../EmptyCart.svg";
import logotSvg from "../../a-logo.svg";
import arrow from "../../Vector.svg";
import arrowUp from "../../Vectorup.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: -1,
      items: ["all", "clothes", "teck"],
      isOpen: true,
      currancy: "$",
    };
  }
  currencies = [
    {
      label: "USD",
      symbol: "$",
    },
    {
      label: "GBP",
      symbol: "£",
    },
    {
      label: "AUD",
      symbol: "A$",
    },
    {
      label: "JPY",
      symbol: "¥",
    },
    {
      label: "RUB",
      symbol: "₽",
    },
  ];
  openCurrancyList() {
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
    console.log(this.state.currancy);
    return (
      <nav>
        <ul className="catogeries">
          {this.state.items.map((item, index) => (
            <li
              key={index}
              className={this.state.activeItem === index ? "active" : ""}
              onClick={this.handleItemClick.bind(this, index)}
            >
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <img src={logotSvg} alt="nav logo" className="nav-logo" />
        <div className="cart-logo">
          <div className="dropdown">
            <p className="dropbtn">{this.state.currancy}</p>
            <div
              className={`dropdown-content ${
                this.state.isOpen ? "" : "displayed"
              }`}
            >
              {this.currencies.map((x) => (
                <option
                  value={x.symbol}
                  onClick={(e) =>
                    this.setState({
                      currancy: e.target.value,
                    })
                  }
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
              onClick={() => this.openCurrancyList()}
            />
          ) : (
            <img
              src={arrowUp}
              alt="arrow"
              className="arrow"
              onClick={() => this.openCurrancyList()}
            />
          )}
          <div className="cart">
            <div className="badge">
              <span>2</span>
            </div>
            <img src={cartSvg} alt="cart logo" className="cart-img" />
          </div>
        </div>
      </nav>
    );
  }
}
