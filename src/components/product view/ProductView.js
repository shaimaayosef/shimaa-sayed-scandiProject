import { ProductViewStyle } from "./styles/ProductView.styled";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, updateCart, updateProduct } from "../../store/cartSlice";
import { EditorState, Editor } from "draft-js";
import { convertFromHTML } from "draft-convert";

class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.product.gallery[0],
      selectedColor: 0,
      selectedSize: 0,
      selectedCapasity: 0,
      editorState: EditorState.createEmpty(),
    };
  }

  changeImg(src) {
    this.setState((prevState) => ({
      ...prevState,
      src: src,
    }));
  }
  addProToCart() {
    this.props.addToCart({
      ...this.props.product,
      selectedSize: this.state.selectedSize,
      selectedColor: this.state.selectedColor,
      selectedCapasity: this.state.selectedCapasity,
    });
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  componentDidMount() {
    const { editorState } = this.state;
    this.onChange(
      EditorState.push(
        editorState,
        convertFromHTML(this.props.product.description)
      )
    );
    localStorage.setItem("cartItems", JSON.stringify(this.props.cartItems));
  }
  render() {
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
            {this.props.product.inStock ? (
              <button className="add" onClick={() => this.addProToCart()}>
                add to card
              </button>
            ) : (
              <p className="out">out of stock</p>
            )}
            <p className="descreption">
              <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
              />
            </p>
          </div>
        </div>
      </ProductViewStyle>
    );
  }
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = { addToCart, updateCart, updateProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);
