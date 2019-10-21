import React, { Component } from "react";

export default class PetitionDefinition extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      summary: this.props.summary,
      background: this.props.background,
      affectedRegion: this.props.affectedRegion,
      successIndicators: this.props.successIndicators
    };
  }

  render() {
    return (
      <>
        <h6 className="bold">Summary</h6>
        <p>
          {this.props.summary
            ? this.props.summary
            : "TBD. Here goes a one paragraph summary of the purpose of the petition."}
        </p>
        <h6 className="bold">Background</h6>
        <p>
          {this.props.background
            ? this.props.background
            : "TBD. Define the reasons behind the petition."}
        </p>
        <h6 className="bold">Affected region</h6>
        <p>
          {this.props.affectedRegion
            ? this.props.affectedRegion
            : "TBD. Define the area that would be affected."}
        </p>
        <h6 className="bold">Success Indicators</h6>
        <p>
          {this.props.successIndicators
            ? this.props.successIndicators
            : "TBD. List relevant measurements that will be affected here."}
        </p>
        <br></br>
      </>
    );
  }
}
