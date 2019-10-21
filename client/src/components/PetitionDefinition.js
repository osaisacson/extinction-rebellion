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
    let cardEdits = this.state.cardcontent.edits;
    let summaryEdits = cardEdits
      ? cardEdits.filter(edit => edit.section === "Summary")
      : [];
    let backgroundEdits = cardEdits
      ? cardEdits.filter(edit => edit.section === "Background")
      : [];
    let regionEdits = cardEdits
      ? cardEdits.filter(edit => edit.section === "Region")
      : [];
    let indicatorEdits = cardEdits
      ? cardEdits.filter(edit => edit.section === "Indicators")
      : [];

    return (
      <>
        <h6 className="bold">Summary</h6>
        <p>
          {this.state.cardcontent.summary
            ? this.state.cardcontent.summary
            : "TBD. Here goes a one paragraph summary of the purpose of the petition."}
        </p>
        <Edits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.summary}
          edits={summaryEdits ? summaryEdits : []}
        ></Edits>
        <div className="separator margin-bottom-10px"></div>

        <h6 className="bold">Background</h6>
        <p>
          {this.state.cardcontent.background
            ? this.state.cardcontent.background
            : "TBD. Define the reasons behind the petition."}
        </p>
        <Edits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.background}
          edits={backgroundEdits ? backgroundEdits : []}
          comments={backgroundEdits.length}
        ></Edits>
        <div className="separator margin-bottom-10px"></div>

        <h6 className="bold">Affected region</h6>
        <p>
          {this.state.cardcontent.affectedRegion
            ? this.state.cardcontent.affectedRegion
            : "TBD. Define the area that would be affected."}
        </p>
        <Edits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.region}
          edits={regionEdits ? regionEdits : []}
          comments={regionEdits.length}
        ></Edits>
        <div className="separator margin-bottom-10px"></div>

        <h6 className="bold">Success Indicators</h6>
        <p>
          {this.state.cardcontent.successIndicators
            ? this.state.cardcontent.successIndicators
            : "TBD. List relevant measurements that will be affected here."}
        </p>
        <Edits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.indicators}
          edits={indicatorEdits ? indicatorEdits : []}
          comments={indicatorEdits.length}
        ></Edits>
        <div className="separator margin-bottom-10px"></div>

        <br></br>
      </>
    );
  }
}
