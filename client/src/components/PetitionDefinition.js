import React, { Component } from 'react';

export default class PetitionDefinition extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      purpose: this.props.purpose,
      background: this.props.background,
      affectedRegion: this.props.affectedRegion,
      successIndicators: this.props.successIndicators
    };
  }

  render() {
    return (
      <>
        <h6 className="bold">Purpose</h6>
        <p>
          {this.props.purpose
            ? this.props.purpose
            : 'TBD. Here goes general expected outcome.'}
        </p>
        <h6 className="bold">Background</h6>
        <p>
          {this.props.background
            ? this.props.background
            : 'TBD. Define what prompted this suggested demand.'}
        </p>
        <h6 className="bold">Affected region</h6>
        <p>
          {this.props.affectedRegion
            ? this.props.affectedRegion
            : 'TBD. Define the area that would be affected by this suggestion.'}
        </p>
        <h6 className="bold">Success Indicators</h6>
        <p>
          {this.props.successIndicators
            ? this.props.successIndicators
            : 'TBD. List relevant measurements that will be affected here.'}
        </p>
        <br></br>
      </>
    );
  }
}
