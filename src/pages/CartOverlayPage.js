import React, { Component } from "react";
import CartOverlay from "../componants/cart overlay/CartOverlay";
import Navbar from "../componants/navbar/Navbar";

export default class extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CartOverlay />
      </div>
    );
  }
}
