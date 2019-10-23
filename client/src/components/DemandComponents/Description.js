import React, { Component } from "react";
import Appendices from "./Appendices";
import Edits from "./Edits";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent
    };
  }

  render() {
    let isDiscussed = this.state.cardcontent.isDiscussed;

    return (
      <>
        {" "}
        {this.state.cardcontent.description.map(description => {
          let originalText = description.text;

          return (
            <div key={description.id}>
              <p className="bold">{description.section}</p>
              <p>{description.text ? description.text : "TBD"}</p>
              {isDiscussed ? (
                <Edits edits={description.edits} originalText={originalText} />
              ) : null}
            </div>
          );
        })}
        <Appendices appendices={this.state.cardcontent.edits} />
      </>
    );
  }
}
