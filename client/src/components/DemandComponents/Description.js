import React, { Component } from "react";
import Appendices from "./Appendices";
// import Edits from './Edits';

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: this.props.card
    };
  }

  render() {
    return (
      <>
        {this.state.card.description.map(description => {
          return (
            <div key={description.id}>
              <p className="bold no-margin">{description.section}</p>
              <p>{description.text ? description.text : "TBD"}</p>
              {/* {isDiscussed ? (
                <Edits edits={description.edits} originalText={originalText} />
              ) : null} */}
            </div>
          );
        })}
        <Appendices appendices={this.state.card.appendices} />
      </>
    );
  }
}
