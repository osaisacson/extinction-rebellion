import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      country: this.props.country,
      city: this.props.city,
      issue: this.props.issue,
      postedBy: this.props.postedBy,
      representative: this.props.representative,
      timeSent: this.props.timeSent,
      status: this.props.status,
      isRebel: this.props.isRebel
    };
  }

  render() {
    return (
      <>
        <h5>{this.state.title}</h5>
        <div className="separator"></div>
        <div className="card-section small-card-header">
          <div className="tight-header">
            <p className="grey">{this.state.issue}</p>
            <p className="grey">By: {this.state.postedBy}</p>
          </div>
          <div>
            <div className="header-with-background">
              {this.state.city},{" "}
              <span className="bold">{this.state.country}</span>
            </div>
            <div className="tight-header">
              {this.state.timeSent ? (
                <p>Sent to representative</p>
              ) : (
                <p>Responsible representative</p>
              )}
              <p className="bold">
                {this.state.representative
                  ? this.state.representative
                  : "To be defined"}
              </p>
              {this.state.timeSent ? <p>{this.state.timeSent}</p> : null}
            </div>
            {this.state.status ? (
              <p className={`pill ${this.state.isRebel ? "red" : "darkblue"}`}>
                {this.state.status}
              </p>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}
