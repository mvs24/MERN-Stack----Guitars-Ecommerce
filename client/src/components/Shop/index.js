import React, { Component } from "react";
import PageTop from "../utils/PageTop";
import { connect } from "react-redux";
import { getBrands, getWoods } from "../../actions/productActions";
import CollapseCheckbox from "../utils/CollapseCheckbox";

class Shop extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  handleFilters=()=>{
      
  }
  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckbox
                handleFilters={filters => this.handleFilters(filters, 'brand')}
                initState={true}
                title="Brands"
                list={products}
              />
            </div>
            <div className="right" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(Shop);
