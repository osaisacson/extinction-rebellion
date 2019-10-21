import React, { Component } from "react";

import Edits from "./Edits";

export default class PetitionDefinition extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent
    };
  }

  render() {
    let summaryEdits = this.state.cardcontent.edits.filter(
      edit => edit.section === "Summary"
    );
    let backgroundEdits = this.state.cardcontent.edits.filter(
      edit => edit.section === "Background"
    );
    let regionEdits = this.state.cardcontent.edits.filter(
      edit => edit.section === "Region"
    );
    let indicatorEdits = this.state.cardcontent.edits.filter(
      edit => edit.section === "Indicators"
    );

    return (
      <>
        <h6 className="bold">Summary</h6>
        <p>
          {this.state.cardcontent.summary
            ? this.state.cardcontent.summary
            : "TBD. Here goes a one paragraph summary of the purpose of the petition."}
        </p>
        <Edits edits={summaryEdits ? summaryEdits : []}></Edits>
        <h6 className="bold">Background</h6>
        <p>
          {this.state.cardcontent.background
            ? this.state.cardcontent.background
            : "TBD. Define the reasons behind the petition."}
        </p>
        <Edits edits={backgroundEdits ? backgroundEdits : []}></Edits>
        <h6 className="bold">Affected region</h6>
        <p>
          {this.state.cardcontent.affectedRegion
            ? this.state.cardcontent.affectedRegion
            : "TBD. Define the area that would be affected."}
        </p>
        <Edits edits={regionEdits ? regionEdits : []}></Edits>
        <h6 className="bold">Success Indicators</h6>
        <p>
          {this.state.cardcontent.successIndicators
            ? this.state.cardcontent.successIndicators
            : "TBD. List relevant measurements that will be affected here."}
        </p>
        <Edits edits={indicatorEdits ? indicatorEdits : []}></Edits>
        <br></br>
      </>
    );
  }
}
