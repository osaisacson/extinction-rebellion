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
        {this.props.card.description.map(description => {
          return (
            <div key={description.id}>
              <p className="bold no-margin">{description.section}</p>
              <p>{description.text ? description.text : "TBD"}</p>

              {description.edits.length ? (
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
