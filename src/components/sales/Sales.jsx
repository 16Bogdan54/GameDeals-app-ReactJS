import React, { Component } from "react";
import { BallTriangle } from "react-loader-spinner";
import ProductCard from "../productCard/ProductCard";
import Container from "../container/Container";
import ControlPanel from "../controlPanel/ControlPanel";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import "./sales.css";

export default class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      searchItem: "",
      storeId: "1",
      isAAA: false,
      isLoading: false,
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchItem: e.target.value,
    });
  };

  handleStoreId = (e) => {
    this.setState({ storeId: e.target.value });
  };

  handleAAA = (e) => {
    this.setState({ isAAA: e.target.checked ? true : false });
  };

  handleFilterSubmit = (e) => {
    this.setState({ searchItem: "" });
    e.preventDefault();
    this.setState({ isLoading: true });
    const url = `https://www.cheapshark.com/api/1.0/deals?storeID=${
      this.state.storeId
    }&AAA=${this.state.isAAA ? 1 : 0}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => this.setState({ sales: result }))
      .catch((error) => alert("error", error));
    this.setState({ isLoading: false });
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });
    const url = `https://www.cheapshark.com/api/1.0/deals?storeID=${this.state.storeId}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => this.setState({ sales: result }))
      .catch((error) => alert("error", error));
    this.setState({ isLoading: false });
  };

  render = () => {
    const data = this.state.sales;
    let sortedData;

    if (this.state.searchItem.length !== 0) {
      sortedData = data.filter((item) => {
        return item.title
          .toLowerCase()
          .includes(this.state.searchItem.toLowerCase());
      });
    }

    if (data.length !== 0) {
      return (
        <Container>
          <div
            className="loader"
            style={{ display: this.state.isLoading ? "block" : "none" }}
          >
            <BallTriangle
              height="200"
              width="200"
              radius="3"
              color="white"
              ariaLabel="three-dots-loading"
            />
          </div>
          <ControlPanel>
            <Search
              handleChange={this.handleSearchChange}
              searchValue={this.state.searchItem}
            />
            <Filter
              handleSubmit={this.handleFilterSubmit}
              handleStoreId={this.handleStoreId}
              handleAAA={this.handleAAA}
            />
          </ControlPanel>
          <section
            className="sales"
            style={{ display: !this.state.isLoading ? "grid" : "none" }}
          >
            {this.state.searchItem.length !== 0 &&
              sortedData.map((sale, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={sale.title}
                    salePrice={sale.salePrice}
                    regularPrice={sale.normalPrice}
                    savings={sale.savings}
                    thumb={sale.thumb}
                  />
                );
              })}

            {this.state.searchItem.length === 0 &&
              data.map((sale, index) => {
                return (
                  <ProductCard
                    key={index}
                    title={sale.title}
                    salePrice={sale.salePrice}
                    regularPrice={sale.normalPrice}
                    savings={sale.savings}
                    thumb={sale.thumb}
                  />
                );
              })}
          </section>
        </Container>
      );
    }
  };
}
