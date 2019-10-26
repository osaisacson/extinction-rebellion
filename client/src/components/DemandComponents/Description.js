import React, { Component } from "react";
import Appendices from "./Appendices";
import Edits from "./Edits";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: this.props.card
    };
  }

  render() {
    let isDiscussed = this.state.card.isDiscussed;

    return (
      <>
        {this.state.card.description.map(description => {
          let originalText = description.text;

          return (
            <div key={description.id}>
              {isDiscussed ? <div className="separator"></div> : null}
              <p className="bold no-margin">{description.section}</p>
              <p>{description.text ? description.text : "TBD"}</p>
              {isDiscussed ? (
                <Edits edits={description.edits} originalText={originalText} />
              ) : null}
            </div>
          );
        })}
        <Appendices appendices={this.state.card.appendices} />
      </>
    );
  }
}
