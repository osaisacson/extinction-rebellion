import React, { Component } from "react";

export default class Stages extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="stages-section">
        {this.props.stages.map(function(item) {
          return (
            <React.Fragment>
              <div className="stage" key={item.id}>
                <h6>{item.name}</h6>
              </div>

              {item.name === "Denied" ? (
                <div className="stage" href="#">
                  <h6 className="act">Rebel</h6>
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
