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
        <div className="section flex-spread">
          {/* show rebel icon if isRebel, else show votes*/}
          {this.state.cardcontent.isRebel ? (
            <div className="large-icon">
              <FontAwesomeIcon icon={faFistRaised} />
            </div>
          ) : null}
          {this.state.cardcontent.isActive ? (
            <div className="large-number">
              <div>Petition No:</div>{" "}
              <div>{this.state.cardcontent.petitionNo}</div>
            </div>
          ) : null}
          {this.state.cardcontent.isDiscussed ? (
            <div className="large-icon">
              <Voting votes={this.state.cardcontent.votes} />
            </div>
          ) : null}
          <div>
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

        <div className="separator"></div>

        {/* Toggle opening Accordion */}
        <Accordion.Toggle
          as={Card.Header}
          eventKey={this.state.cardkey}
          onClick={this.handleDemandClick}
        >
          <h5>{this.state.cardcontent.title}</h5>
        </Accordion.Toggle>

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
      content: (
        <>
          {/* Header with general info */}
          <Header
            issue={this.state.cardcontent.issue}
            postedBy={this.state.cardcontent.postedBy}
            representative={this.state.cardcontent.representative}
            timeSent={this.state.cardcontent.timeSent}
          />
          <div className="separator"></div>
          <Description cardcontent={this.state.cardcontent} />
        </>
      )
    });
  }

  handleRebelClick() {
    this.setState({
      content: "Information on where and when to rebel."
    });
  }
}
