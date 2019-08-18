import React, { Component } from "react";
import HomeSlider from "./HomeSlider";
import HomePromotions from "./HomePromotions";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <HomePromotions />
      </div>
    );
  }
}

export default Home;
