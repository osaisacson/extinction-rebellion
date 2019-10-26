import React, { Component } from "react";

import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Demand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: this.props.card
    };
  }

  render() {
    return (
      <>
        <h5>{this.state.card.title}</h5>
        <div className="separator"></div>

        <div>
          {/* show rebel icon if isRebel, and petition nr if isActive*/}
          {this.state.card.isRebel ? (
            <div className="large-icon">
              <FontAwesomeIcon icon={faFistRaised} />
            </div>
          ) : null}
          {this.state.card.isActive ? (
            <div className="large-number tight-header">
              <p>Petition No</p> <div>{this.state.card.petitionNo}</div>
            </div>
          ) : null}

          <div className="flex-column-right">
            {/* Country */}
            <div className="header-with-background">
              {this.state.card.city},{" "}
              <span className="bold">{this.state.card.country}</span>
            </div>

            {/* Status */}
            {this.state.card.status ? (
              <p
                className={`pill ${
                  this.state.card.isRebel ? "red" : "darkblue"
                }`}
              >
                {this.state.card.status}
              </p>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

//  <div className="section tight-header">
//        <h6 className="bold">Being defined ({nrSuggestedCards})</h6>

//        <p>These suggested demands are works in progress.</p>
//       <p>
//         Defining a petition is intensive stuff, so lets help eachother
//         with the heavy lifting.
//       </p>
//       <p>
//         To become an accepted demand the petition needs to have all
//         parts defined, and be as clear, measurable and corraborated as
//         possible.
//       </p>
//     </div>
