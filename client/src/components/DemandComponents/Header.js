import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="small-card-header">
          <div className="tight-header">
            <p className="grey">By: {this.props.postedBy}</p>
          </div>
          <div>
            <div className="tight-header">
              {this.props.timeSent ? (
                <p>Sent to representative</p>
              ) : (
                <p>Responsible representative</p>
              )}
              <p className="bold">
                {this.props.representative
                  ? this.props.representative
                  : "To be defined"}
              </p>
              {this.props.timeSent ? <p>{this.props.timeSent}</p> : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}
