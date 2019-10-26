import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Demand from "./Demand";
import Description from "./DemandComponents/Description";
import Header from "./DemandComponents/Header";
import Voting from "./Voting";

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
                  <Card key={card.id}>
                    {/* Show voting section if card isSuggested is true */}
                    {this.state.isSuggested ? (
                      <>
                        <div className="large-icon">
                          <Voting votes={card.votes} />
                        </div>
                      </>
                    ) : null}
                    <Accordion.Toggle as={Card.Header} eventKey={card.id}>
                      <Demand card={card}></Demand>
                    </Accordion.Toggle>

                    {/* Opened collapsible with full demand details */}
                    <Accordion.Collapse eventKey={card.id}>
                      <Card.Body>
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
                );
              })}
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
