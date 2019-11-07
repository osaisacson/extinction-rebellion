import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import References from "./DemandComponents/References";
import Description from "./DemandComponents/Description";
import Header from "./DemandComponents/Header";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHashtag,
  faFistRaised,
  faCheck,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class Demands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDemandSection: false,
      showReferencesSection: false,
      showRebelSection: false
    };

    this.handleDemandClick = this.handleDemandClick.bind(this);
    this.handleReferencesClick = this.handleReferencesClick.bind(this);
    this.handleRebelClick = this.handleRebelClick.bind(this);
  }

  render() {
    return (
      <div className="card-wrapper" key={this.props.card.id}>
        {/* Country and status indicator, shows outside card */}
        <div className="flex-spread-end">
          {/* Country */}
          <div className="header-with-background">
            {this.props.card.city},{" "}
            <span className="bold">{this.props.card.country}</span>
          </div>

          {/* Show voting section if card isSuggested is true */}
          {this.props.isSuggested ? (
            <>
              <div className="large-icon">
                <Voting votes={this.props.card.votes} />
              </div>
            </>
          ) : null}
          {/* Status */}
          {!this.props.isSuggested && this.props.card.status ? (
            <p className={`pill ${this.props.isRebel ? "red" : "darkblue"}`}>
              {this.props.card.status}
            </p>
          ) : null}
        </div>

        <Card>
          <div className="demand-header">
            {/* Section with votes, appears outside toggle so can use the voting functionality */}
            <Voting votes={this.props.card.votes} />
            {/* Main card header */}
            <h5>{this.props.card.title}</h5>
          </div>
          <div className="separator"></div>

          {/* TRIGGERS */}
          <div className="card-stats-section flex-spread">
            {/* Show full demand */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${this.props.card.id}demands`}
              className="icon-section"
              onClick={this.handleDemandClick}
            >
              <FontAwesomeIcon icon={faBook} />
              {this.props.card.isActive || this.props.card.isRebel ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="green-color icon-margin-left"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faWrench}
                  className="tweak-color icon-margin-left"
                />
              )}
            </Accordion.Toggle>

            {/* Show references */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${this.props.card.id}references`}
              className="icon-section"
              onClick={this.handleReferencesClick}
            >
              <FontAwesomeIcon icon={faHashtag} />
            </Accordion.Toggle>
            {/* Show rebel actions */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${this.props.card.id}rebel`}
              className="icon-section"
              onClick={this.handleRebelClick}
            >
              <h6>
                {this.props.card.actions ? this.props.card.actions.length : 0}
              </h6>
              <FontAwesomeIcon icon={faFistRaised} />
            </Accordion.Toggle>
          </div>

          {/* CONTENT */}

          {/* Demand section */}
          {this.state.showDemandSection ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}demands`}>
                <Card.Body>
                  <div>
                    {/* Summary section*/}
                    {this.props.isActive ? (
                      <>
                        <div className="large-number tight-header">
                          <p>Petition Id</p>{" "}
                          <div>{this.props.card.petitionId}</div>
                        </div>
                        <div className="separator"></div>
                      </>
                    ) : null}
                    {this.props.isSuggested ? (
                      <>
                        <div className="tight-header">
                          <p>Being defined. Edit and add below.</p>{" "}
                        </div>
                        <div className="separator"></div>
                      </>
                    ) : null}
                  </div>
                  <Header
                    issue={this.props.card.issue}
                    postedBy={this.props.card.postedBy}
                    representative={this.props.card.representative}
                    timeSent={this.props.card.timeSent}
                  />
                  <div className="separator"></div>
                  <Description card={this.props.card} />
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* References section */}
          {this.state.showReferencesSection && this.props.card.petitionId ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}references`}>
                <Card.Body>
                  <h6>
                    Add references that relates to this demand by using
                    <span className="hashtag">
                      #{this.props.card.petitionId}
                    </span>
                    on Twitter. Your post will automatically be pulled here.
                  </h6>
                  <References hashtag={this.props.card.petitionId} />
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* Action section */}
          {this.state.showRebelSection && this.props.card.actions ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}rebel`}>
                <Card.Body>
                  <h6>
                    Join by indicating so on the right, you'll get sent a
                    telegram invitation with more info.
                  </h6>
                  {this.props.card.actions.map(action => {
                    return (
                      <React.Fragment key={action.id}>
                        <div className="action-section tight-header">
                          <div className="flex-spread">
                            <div>
                              <h6 className="bold">
                                {action.date}, {action.time}
                              </h6>
                              {/* Opened collapsible with full demand details */}
                              <p>{action.details}</p>
                            </div>
                            {/* Joined people */}
                            <Voting
                              showAsRebel={true}
                              votes={action.joined ? action.joined : 0}
                            ></Voting>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}
        </Card>
      </div>
    );
  }

  handleDemandClick() {
    this.setState({
      showDemandSection: true,
      showReferencesSection: false,
      showRebelSection: false
    });
  }

  handleReferencesClick() {
    this.setState({
      showDemandSection: false,
      showReferencesSection: true,
      showRebelSection: false
    });
  }

  handleRebelClick() {
    this.setState({
      showDemandSection: false,
      showReferencesSection: false,
      showRebelSection: true
    });
  }
}
