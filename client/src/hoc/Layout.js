import React, { Component } from "react";

import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";
export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="page_container">
        {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
