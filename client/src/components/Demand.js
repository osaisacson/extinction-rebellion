import React, { Component } from "react";

import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Demand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent
    };

    // this.handleDemandClick = this.handleDemandClick.bind(this);
    // this.handleRebelClick = this.handleRebelClick.bind(this);
  }

  render() {
    return (
      <>
        <h5>{this.state.cardcontent.title}</h5>
        <div className="separator"></div>

        <div>
          {/* show rebel icon if isRebel, and petition nr if isActive*/}
          {this.state.cardcontent.isRebel ? (
            <div className="large-icon">
              <FontAwesomeIcon icon={faFistRaised} />
            </div>
          ) : null}
          {this.state.cardcontent.isActive ? (
            <div className="large-number tight-header">
              <p>Petition No</p> <div>{this.state.cardcontent.petitionNo}</div>
            </div>
          ) : null}

          <div className="flex-column-right">
            {/* Country */}
            <div className="header-with-background">
              {this.state.cardcontent.city},{" "}
              <span className="bold">{this.state.cardcontent.country}</span>
            </div>

            {/* Status */}
            {this.state.cardcontent.status ? (
              <p
                className={`pill ${
                  this.state.cardcontent.isRebel ? "red" : "darkblue"
                }`}
              >
                {this.state.cardcontent.status}
              </p>
            ) : null}
          </div>
        </div>

        {/* Rebel icon toggle: Only show if card is marked as isRebel */}
        {/* {this.state.cardcontent.isRebel ? (
            <Accordion.Toggle as={Card.Header} eventKey={this.state.cardkey}>
              <div className="icon-section">
                <button
                  id="action"
                  className="fa-icons actionIcon"
                  onClick={this.handleRebelClick}
                >
                  <FontAwesomeIcon icon={faFistRaised} />
                </button>
              </div>
            </Accordion.Toggle>
          ) : null} */}
      </>
    );
  }

  // handleDemandClick() {
  //   this.setState({
  //     content: (
  //       <>
  //         {/* Header with general info */}
  //         <Header
  //           issue={this.state.cardcontent.issue}
  //           postedBy={this.state.cardcontent.postedBy}
  //           representative={this.state.cardcontent.representative}
  //           timeSent={this.state.cardcontent.timeSent}
  //         />
  //         <div className="separator"></div>
  //         <Description cardcontent={this.state.cardcontent} />
  //       </>
  //     )
  //   });
  // }

  // handleRebelClick() {
  //   this.setState({
  //     content: "Information on where and when to rebel."
  //   });
  // }
}
