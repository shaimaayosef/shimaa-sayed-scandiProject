import React, { Component } from "react";
import Card from "./Card";
import { CardStyel } from "./styles/card.styled";

export default class CardContainer extends Component {
  render() {
    console.log(this.props.category);
    return (
      <CardStyel>
        <div className="CardContainer">
          <div className="title">
            <h2>{this.props.category.name}</h2>
          </div>
          <div className="cardsDiv">
            {this.props.category.products.length > 0 &&
              this.props.category.products.map((product) => (
                <Card product={product} />
              ))}
          </div>
        </div>
      </CardStyel>
    );
  }
}
