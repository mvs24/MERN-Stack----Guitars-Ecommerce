import React, { Component } from "react";
import HomeSlider from "./HomeSlider";
import HomePromotions from "./HomePromotions";
import { connect } from "react-redux";
import {
  getProductsBySell,
  getProductsByArrival
} from "../../actions/productActions";

import CardBlock from '../utils/CardBlock'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());
    this.props.dispatch(getProductsByArrival());
  }
  render() {
    return (
      <div>
        <HomeSlider />
        <CardBlock
          list={this.props.products.bySell}
          title="Best Selling Guitars"
        />
        <HomePromotions />
        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Home);
