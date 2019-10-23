import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: this.props.issue,
      postedBy: this.props.postedBy,
      representative: this.props.representative,
      timeSent: this.props.timeSent
    };
  }

  render() {
    return (
      <>
        <div className="card-section small-card-header">
          <div className="tight-header">
            <p className="grey">{this.state.issue}</p>
            <p className="grey">By: {this.state.postedBy}</p>
          </div>
          <div>
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
          </div>
        </div>
      </>
    );
  }
}
