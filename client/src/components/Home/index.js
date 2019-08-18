import React, { Component } from "react";
import HomeSlider from "./HomeSlider";
import HomePromotions from "./HomePromotions";
import { connect } from "react-redux";
import {
  getProductsBySell,
  getProductsByArrival
} from "../../actions/productActions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }
  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotions />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Home);
