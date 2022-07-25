import React, { Component } from "react";
import "./filter.css";

export default class Filter extends Component {
  render() {
    return (
      <form className="filter" onSubmit={this.props.handleSubmit}>
        <label className="filter-store">
          Store
          <select onChange={this.props.handleStoreId}>
            <option value="1">Steam</option>
            <option value="2">GamersGate</option>
            <option value="3">GreenManGaming</option>
          </select>
        </label>
        <label className="filter-AAA">
          AAA:
          <input
            name="isAAA"
            type="checkbox"
            checked={this.props.isAAAChecked}
            onChange={this.props.handleAAA}
          />
        </label>
        <input className="submit-btn" type="submit" placeholder="Apply" />
      </form>
    );
  }
}
