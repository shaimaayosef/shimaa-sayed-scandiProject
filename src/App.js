import React, { Component } from "react";
// import ProductCart from "./componants/cart/ProductCart";
// import CardContainer from "./componants/card/CardContainer";
import Navbar from "./componants/navbar/Navbar";
import ProductView from "./componants/product view/ProductView";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <CardContainer /> */}
        <ProductView />
        {/* <ProductCart /> */}
      </div>
    );
  }
}

export default App;
