import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Demand from "./Demand";

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
      isSent: this.props.isSent,
      isSuggested: this.props.isSuggested
    };
  }

  render() {
    let filteredCards = this.state.cards.filter(card => {
      return card.country.indexOf(this.props.search) !== -1;
    });

    let noOfCards = !filteredCards
      ? this.state.noOfCards
      : filteredCards.length;

    return (
      <Card className={this.state.backgroundColor}>
        {/* Accordion header with name of section and number of cards */}
        <Accordion.Toggle as={Card.Header} eventKey={this.state.eventKey}>
          <h2>
            {this.state.header} ({noOfCards})
          </h2>
          <div className="tight-header no-margin">
            <p>{this.state.subheader}</p>
          </div>
        </Accordion.Toggle>
        {/* Collapsed accordion section with all cards in the set */}
        <Accordion.Collapse eventKey={this.state.eventKey}>
          <Card.Body>
            <Accordion>
              {!filteredCards.length ? (
                <div className="tight-header">
                  <p className="text-center">(Nothing here yet.)</p>
                </div>
              ) : null}
              {filteredCards.map(card => {
                return (
                  <Demand
                    key={card.id}
                    card={card}
                    isRebel={this.state.isRebel}
                    isSent={this.state.isSent}
                    isSuggested={this.state.isSuggested}
                  ></Demand>
                );
              })}
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
