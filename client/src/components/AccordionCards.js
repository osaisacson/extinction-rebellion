import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Description from "./DemandComponents/Description";
import Header from "./DemandComponents/Header";
import Voting from "./Voting";

import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AccordionCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventKey: this.props.eventKey,
      header: this.props.header,
      subheader: this.props.subheader,
      cards: this.props.cards,
      noOfCards: this.props.cards.length,
      backgroundColor: this.props.backgroundColor,
      isRebel: this.props.isRebel,
      isActive: this.props.isActive,
      isSuggested: this.props.isSuggested
    };
  }

  render() {
    return (
      <Card className={this.state.backgroundColor}>
        {/* Accordion header with name of section and number of cards */}
        <Accordion.Toggle as={Card.Header} eventKey={this.state.eventKey}>
          <h2>
            {this.state.header} ({this.state.noOfCards})
          </h2>
          <div className="tight-header no-margin">
            <p>{this.state.subheader}</p>
          </div>
        </Accordion.Toggle>
        {/* Collapsed accordion section with all cards in the set */}
        <Accordion.Collapse eventKey={this.state.eventKey}>
          <Card.Body>
            <Accordion>
              {this.state.cards.map(card => {
                return (
                  <React.Fragment key={card.id}>
                    {/* Country and status indicator, shows outside card */}
                    <div className="flex-spread-end">
                      {/* Country */}
                      <div className="header-with-background">
                        {card.city},<span className="bold">{card.country}</span>
                      </div>

                      {/* Show voting section if card isSuggested is true */}
                      {this.state.isSuggested ? (
                        <>
                          <div className="large-icon">
                            <Voting votes={card.votes} />
                          </div>
                        </>
                      ) : null}
                      {/* Status */}
                      {!this.state.isSuggested && card.status ? (
                        <p
                          className={`pill ${
                            this.state.isRebel ? "red" : "darkblue"
                          }`}
                        >
                          {card.status}
                        </p>
                      ) : null}
                    </div>

                    <Card>
                      {/* Main card header */}
                      <Accordion.Toggle as={Card.Header} eventKey={card.id}>
                        <h5>{card.title}</h5>
                      </Accordion.Toggle>

                      {/* Opened collapsible with full demand details */}
                      <Accordion.Collapse eventKey={card.id}>
                        <Card.Body>
                          <div className="separator"></div>

                          <div>
                            {/* show rebel icon if isRebel, and petition nr if isActive*/}
                            {this.state.isRebel ? (
                              <div className="large-icon">
                                <FontAwesomeIcon icon={faFistRaised} />
                              </div>
                            ) : null}
                            {this.state.isActive ? (
                              <div className="large-number tight-header">
                                <p>Petition No</p> <div>{card.petitionNo}</div>
                              </div>
                            ) : null}
                            {this.state.isSuggested ? (
                              <div className="tight-header">
                                <p>Being defined. Edit and add below.</p>{" "}
                              </div>
                            ) : null}
                          </div>
                          <div className="separator"></div>
                          <Header
                            issue={card.issue}
                            postedBy={card.postedBy}
                            representative={card.representative}
                            timeSent={card.timeSent}
                          />
                          <div className="separator"></div>
                          <Description card={card} />
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </React.Fragment>
                );
              })}
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
