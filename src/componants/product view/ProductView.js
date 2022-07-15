import { ProductViewStyle } from "./styles/ProductView.styled";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, updateCart } from "../../store/cartSlice";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.product.gallery[0],
      selectedAttributes: {},
      selectedColor: 0,
      selectedSize: 0,
      selectedCapasity: 0,
    };
  }
  selectAttributes(name, index) {
    this.setState((prevState) => ({
      ...prevState,
      selectedAttributes: {
        ...prevState.selectedAttributes,
        [name]: index,
      },
    }));
  }
  changeImg(src) {
    this.setState((prevState) => ({
      ...prevState,
      src: src,
    }));
  }
  addToCart() {
    const isExist = this.props.cartItems.filter(
      (item) => item.id === this.props.product.id
    )[0];
    isExist
      ? this.props.updateCart(this.props.product)
      : this.props.addToCart(this.props.product);
  }
  render() {
    const description = this.props.product.description;
    console.log(this.props.cartItems);
    return (
      <ProductViewStyle>
        <div className="ProductView">
          <div className="product-images">
            {this.props.product.gallery.map((picture, i) => (
              <img
                src={picture}
                alt={this.props.product.name}
                key={i}
                onClick={this.changeImg.bind(this, picture)}
              />
            ))}
          </div>
          <div className="Photo-Gallery">
            <img src={this.state.src} alt={this.props.product.name} />
          </div>
          <div className="product-info">
            <h2>{this.props.product.brand}</h2>
            <h3>{this.props.product.name}</h3>
            {this.props.product.attributes
              .filter((a) => a.id === "Size")
              .map((d, i) => (
                <div className="size" key={i}>
                  <h4>Size:</h4>
                  <div className="size-box">
                    {d.items.map((size, i) => (
                      <div
                        key={i}
                        className={`size-x ${
                          this.state.selectedSize === i ? "selected" : ""
                        }`}
                        onClick={() => {
                          this.setState((prevState) => ({
                            ...prevState,
                            selectedSize: i,
                          }));
                          this.selectAttributes(d.id, i);
                        }}
                      >
                        {size.value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            {this.props.product.attributes
              .filter((a) => a.id === "Capacity")
              .map((d, i) => (
                <div className="size" key={i}>
                  <h4>Capacity:</h4>
                  <div className="size-box">
                    {d.items.map((capacity, i) => (
                      <div
                        key={i}
                        className={`size-x ${
                          this.state.selectedCapasity === i ? "selected" : ""
                        }`}
                        onClick={() => {
                          this.setState((prevState) => ({
                            ...prevState,
                            selectedCapasity: i,
                          }));
                          this.selectAttributes(d.id, i);
                        }}
                      >
                        {capacity.value}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            {this.props.product.attributes
              .filter((a) => a.id === "Color")
              .map((d, i) => (
                <div className="color" key={i}>
                  <h4>Color:</h4>
                  <div className="color-box">
                    {d.items.map((color, i) => (
                      <div
                        key={i}
                        className={`color-x ${
                          this.state.selectedColor === i ? "selected" : ""
                        }`}
                        style={{ backgroundColor: `${color.value}` }}
                        onClick={() => {
                          this.setState((prevState) => ({
                            ...prevState,
                            selectedColor: i,
                          }));
                          this.selectAttributes(d.id, i);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            <div className="price">
              <h4 className="price">price:</h4>
              <span>
                {
                  this.props.product.prices[this.props.selectedCurrency]
                    .currency.symbol
                }
                {this.props.product.prices[this.props.selectedCurrency].amount}
              </span>
            </div>

            <button className="add" onClick={() => this.addToCart()}>
              add to card
            </button>
            <p
              className="descreption"
              //This dangerouslySetInnerHTML is dangerous, but since we do not take from users, but rather from the back-end, it will not be dangerous because the back-end is reliable.
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </ProductViewStyle>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = { addToCart, updateCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
