import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Product";
import JSON from "./data.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      productData: JSON,
      filteredData: JSON,
    };
  }

  filterData = (keyword) => {
    let output = this.state.productData.filter((data) => {
      return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });

    this.setState({ filteredData: output });
  };

  render() {
    return (
      <div>
        <Header
          useInput={(data) => {
            this.filterData(data);
          }}
        />{" "}
        <hr />
        <Products products={this.state.filteredData} />
        <hr />
        <Footer year="2023" month="Nov" />
      </div>
    );
  }
}

export default App;
