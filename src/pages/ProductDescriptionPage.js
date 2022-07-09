import React, { Component } from "react";
import ProductView from "../componants/product view/ProductView";

export default class ProductDescriptionPage extends Component {
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <ProductView />
      </div>
    );
  }
}
