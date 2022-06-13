import React, { Component } from "react";
import Card from "./Card";
import "./card.scss";

export default class CardContainer extends Component {
  render() {
    return (
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
    );
  }
}
