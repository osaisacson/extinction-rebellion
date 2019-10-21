import React, { Component } from "react";

export default class Stories extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      storycontent: this.props.storycontent,
      key: this.props.key
    };
  }

  render() {
    return (
      <div className="story">
        <div class="mask">
          <img
            src={this.state.storycontent.img}
            alt="Avatar"
            className="avatar"
          ></img>
        </div>
        <h5>{this.state.storycontent.city}</h5>
        <h5>{this.state.storycontent.country}</h5>
      </div>
    );
  }
}
