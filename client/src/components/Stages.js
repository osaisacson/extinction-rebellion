import React, { Component } from 'react';

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
                {item.name}
              </div>

              {item.name === 'Denied' ? (
                <button type="button" className="btn btn-danger">
                  Rebel
                </button>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
