import React, { Component } from "react";
import CardContainer from "../components/card/CardContainer";
import { connect } from "react-redux";
import { GET_CATEGORY } from "../queries/queries";
import { getCategory } from "../store/categoriesSlice";
class Category extends Component {
  componentDidMount() {
    this.props.client
      .query({
        query: GET_CATEGORY,
        variables: {
          input: { title: this.props.match.params.category || "all" },
        },
      })
      .then((result) => this.props.getCategory(result.data));
  }
  componentDidUpdate() {
    this.props.client
      .query({
        query: GET_CATEGORY,
        variables: {
          input: { title: this.props.match.params.category || "all" },
        },
      })
      .then((result) => this.props.getCategory(result.data.category));
  }

  render() {
    return (
      <>
        {this.props.category?.name ? (
          <CardContainer category={this.props.category} />
        ) : (
          <div>wait....</div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories.category,
});
const mapDispatchToProps = { getCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
