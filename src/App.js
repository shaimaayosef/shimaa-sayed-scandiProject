import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
// import { Switch, Route } from "react-router";
// import CartOverlay from "./componants/cart overlay/CartOverlay";
// import Cart from "./componants/cart/Cart";
// import ProductCart from "./componants/cart/ProductCart";
import CardContainer from "./componants/card/CardContainer";
import Navbar from "./componants/navbar/Navbar";
import CartOverlayPage from "./pages/CartOverlayPage";
import CartPage from "./pages/CartPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import ProductList from "./pages/ProductList";
// import ProductView from "./componants/product view/ProductView";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/discription">
            <ProductDescriptionPage />
          </Route>
          <Route path="/CartOverlayPage">
            <CartOverlayPage />
          </Route>
        </Switch>
        {/* <Navbar />
        <CardContainer />
        <ProductView />
        <ProductCart />
        <Cart />
        <CartOverlay /> */}
      </div>
    );
  }
}

export default App;
