import React, { Component } from "react";
import CardContainer from "../componants/card/CardContainer";
import Navbar from "../componants/navbar/Navbar";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CardContainer />
      </div>
    );
  }
}
