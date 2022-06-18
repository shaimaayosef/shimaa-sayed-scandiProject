import React, { Component } from "react";
import Card from "./Card";
import { CardStyel } from "./styles/card.styled";

export default class CardContainer extends Component {
  render() {
    return (
      <CardStyel>
        <div className="CardContainer">
          <div className="title">
            <h2>Category name</h2>
          </div>
          <div className="cardsDiv">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </CardStyel>
    );
  }
}
