import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Header from "./DemandComponents/Header";
import Description from "./DemandComponents/Description";
import Voting from "./Voting";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Demand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent,
      cardkey: this.props.key
    };

    this.handleDemandClick = this.handleDemandClick.bind(this);
    this.handleRebelClick = this.handleRebelClick.bind(this);
  }

  render() {
    return (
      <Card key={this.state.cardkey}>
        {/* Header with general info */}
        <Header
          title={this.state.cardcontent.title}
          country={this.state.cardcontent.country}
          city={this.state.cardcontent.city}
          issue={this.state.cardcontent.issue}
          postedBy={this.state.cardcontent.postedBy}
          representative={this.state.cardcontent.representative}
          timeSent={this.state.cardcontent.timeSent}
          status={this.state.cardcontent.status}
          isRebel={this.state.cardcontent.isRebel}
        />

        <div className="separator"></div>

        {/* Action section */}
        <div className="action-section">
          {/* Votes */}
          <Voting votes={this.state.cardcontent.votes} />

          {/* Demand icon toggle */}
          <Accordion.Toggle as={Card.Header} eventKey={this.state.cardkey}>
            <div className="icon-section">
              <button
                id="demand"
                className="fa-icons demandIcon"
                onClick={this.handleDemandClick}
              >
                <i className="fas fa-file"></i>
              </button>
            </div>
          </Accordion.Toggle>

          {/* Rebel icon toggle: Only show if card is marked as isRebel */}
          {this.state.cardcontent.isRebel ? (
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
          ) : null}
        </div>
        <div className="separator"></div>

        {/* Switch content based on which icon is clicked above */}
        <Accordion.Collapse eventKey={this.state.cardkey}>
          <Card.Body>{this.state.content}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }

  handleDemandClick() {
    this.setState({
      content: <Description cardcontent={this.state.cardcontent} />
    });
  }

  handleRebelClick() {
    this.setState({
      content: "Information on where and when to rebel."
    });
  }
}
