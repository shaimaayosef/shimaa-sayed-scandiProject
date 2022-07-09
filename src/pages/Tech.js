import React, { Component } from "react";
import CardContainer from "../componants/card/CardContainer";
import { connect } from "react-redux";

class Tech extends Component {
  render() {
    return <CardContainer category={this.props.categories[2]} />;
  }
}
const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Tech);
