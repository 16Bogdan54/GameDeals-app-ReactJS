import React, { Component } from "react";
import "./search.css";

export default class Search extends Component {
  render() {
    return (
      <form className="search">
        <label>
          Search by title:
          <input
            type="text"
            placeholder="title"
            onChange={this.props.handleChange}
            value={this.props.searchValue}
          />
        </label>
      </form>
    );
  }
}
