import React, { Component } from "react";
import CardContainer from "../components/card/CardContainer";
import { connect } from "react-redux";

class All extends Component {
  render() {
    return <CardContainer category={this.props.categories[0]} />;
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(All);
