import React, { Component } from "react";
import PageTop from "../utils/PageTop";
import { connect } from "react-redux";
import { getBrands, getWoods } from "../../actions/productActions";
import CollapseCheckbox from "../utils/CollapseCheckbox";
import CollapseRadio from "../utils/CollapseRadio";
import { frets, price } from "../utils/Form/fixedCategories";

class Shop extends Component {
  state = {
    grid: "",
    limit: 6,
    skip: 0,
    filters: {
      brand: [],
      frets: [],
      wood: [],
      price: []
    }
  };

  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getWoods());
  }

  handlePrice = value => {
    const data = price;

    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    return array;
  };

  handleFilters = (filters, category) => {
    const newFilters = { ...this.state.filters };
    newFilters[category] = filters;

    if (category === "price") {
      let priceValue = this.handlePrice(filters);
      newFilters[category] = priceValue;
    }

    this.setState({ filters: newFilters });
  };
  render() {
    const products = this.props.products;
    return (
      <div>
        <PageTop title="Browse Products" />
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <CollapseCheckbox
                handleFilters={filters => this.handleFilters(filters, "brand")}
                initState={true}
                title="Brands"
                list={products.brands}
              />
              <CollapseCheckbox
                handleFilters={filters => this.handleFilters(filters, "frets")}
                initState={false}
                title="Frets"
                list={frets}
              />
              <CollapseCheckbox
                handleFilters={filters => this.handleFilters(filters, "wood")}
                initState={false}
                title="Woods"
                list={products.woods}
              />
              <CollapseRadio
                handleFilters={filters => this.handleFilters(filters, "price")}
                initState={true}
                title="Price"
                list={price}
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
