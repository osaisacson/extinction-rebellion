import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import DemandDetail from "./DemandDetail";

export default class AccordionCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventKey: this.props.eventKey,
      header: this.props.header,
      subheader: this.props.subheader,
      demands: this.props.demands,
      noOfCards: this.props.demands.length,
      backgroundColor: this.props.backgroundColor,
      isRebel: this.props.isRebel,
      isSent: this.props.isSent,
      isSuggested: this.props.isSuggested
    };
  }

  render() {
    let filteredCards = this.state.demands.filter(card => {
      return card.country.indexOf(this.props.search) !== -1;
    });

    let noOfCards = !filteredCards
      ? this.state.noOfCards
      : filteredCards.length;

    return (
      <Card className={this.state.backgroundColor}>
        {/* Accordion header with name of section and number of demands */}
        <Accordion.Toggle as={Card.Header} eventKey={this.state.eventKey}>
          <h2>
            {this.state.header} ({noOfCards})
          </h2>
          <div className="tight-header no-margin">
            <p>{this.state.subheader}</p>
          </div>
        </Accordion.Toggle>
        {/* Collapsed accordion section with all demands in the set */}
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
                  <DemandDetail
                    key={card.id}
                    card={card}
                    isRebel={this.state.isRebel}
                    isSent={this.state.isSent}
                    isSuggested={this.state.isSuggested}
                  ></DemandDetail>
                );
              })}
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}
