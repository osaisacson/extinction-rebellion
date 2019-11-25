import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <input
        className="search-filter"
        type="text"
        placeholder="Choose Country"
        value={this.props.search}
        onChange={this.props.updateSearch}
      ></input>
    );
  }
}
