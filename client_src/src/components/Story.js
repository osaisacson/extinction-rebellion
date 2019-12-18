import React, { Component } from "react";
// import axios from "axios";

export default class Story extends Component {
  updateTwitter(handle) {
    this.props.handleStateChange(handle);
  }

  render() {
    return (
      <button
        className="story"
        onClick={e => this.props.onClick(this.props.twitterHandle)}
      >
        <div className="mask">
          <img src={this.props.img} alt="img"></img>
        </div>
        <h5>{this.props.city}</h5>
        <h5>{this.props.country}</h5>
      </button>
    );
  }
}
