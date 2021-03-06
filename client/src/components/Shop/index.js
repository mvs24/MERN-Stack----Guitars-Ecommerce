import React, { Component } from "react";
import PageTop from "../utils/PageTop";
import { connect } from "react-redux";
import {
  getBrands,
  getWoods,
  getProductsToShop
} from "../../actions/productActions";
import CollapseCheckbox from "../utils/CollapseCheckbox";
import CollapseRadio from "../utils/CollapseRadio";
import { frets, price } from "../utils/Form/fixedCategories";
import LoadMore from "./LoadMore";

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
    this.props.dispatch(
      getProductsToShop(this.state.skip, this.state.limit, this.state.filters)
    );
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
    this.showFilteredResults(newFilters);
    this.setState({ filters: newFilters });
  };

  showFilteredResults = filters => {
    this.props
      .dispatch(getProductsToShop(0, this.state.limit, filters))
      .then(() => {
        this.setState({ skip: 0 });
      });
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
            <div className="right">
              <div className="shop_options">
                <div className="shop_grids clear">
                  grids
                </div>
              </div>
              <div className="">
              <LoadMore 
              grid={this.state.grid}
              limit={this.state.limit}
              size={products.toShopSize}
              products={products.toShop}
              loadMore={()=>console.log("load")}
              />
              </div>
            </div>
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
