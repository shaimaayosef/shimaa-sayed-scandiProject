import "./productView.scss";
import React, { Component } from "react";
// import ProCartSvg from "../../Empty Cart.svg";

export default class ProductView extends Component {
  onClick = () => {
    console.log("this is a function");
  };
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div className="ProductView" onClick={this.onClick}></div>;
  }
}
