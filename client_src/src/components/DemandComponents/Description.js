import React, { Component } from "react";
import Edits from "./Edits";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.card.isSent ? (
          <>
            <br></br>
            <h6>
              This demand was defined by{" "}
              <span className="bold">{this.props.card.noOfContributors}</span>{" "}
              of our members, who together made{" "}
              <span className="bold">{this.props.card.noOfEdits}</span> edits.
              Add references supporting the demand in the hashtag section above,
              and start actions to push it through parliament in the rebel
              section.
            </h6>
            <div className="separator"></div>
          </>
        ) : null}
        {this.props.card.description.map(description => {
          return (
            <div key={description.id}>
              <p className="bold no-margin">{description.section}</p>
              <p>{description.text ? description.text : "TBD"}</p>

              {!this.props.card.isSent && description.edits.length ? (
                <Edits
                  edits={description.edits}
                  originalText={description.text}
                />
              ) : null}
            </div>
          );
        })}
      </>
    );
  }
}
