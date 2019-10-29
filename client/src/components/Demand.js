import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Description from "./DemandComponents/Description";
import Header from "./DemandComponents/Header";
import Edits from "./DemandComponents/Edits";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faFistRaised } from "@fortawesome/free-solid-svg-icons";
import Appendices from "./DemandComponents/Appendices";

export default class Demands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAppendiceSection: false,
      showEditSection: false,
      showRebelSection: false
    };

    this.handleAppendiceClick = this.handleAppendiceClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
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
          {/* Main card header */}
          <Accordion.Toggle as={Card.Header} eventKey={this.props.card.id}>
            <h5>{this.props.card.title}</h5>
          </Accordion.Toggle>

          {/* Section with card stats, appears outside toggle so can use the voting functionality */}
          <div className="separator"></div>
          <div className="card-stats-section flex-spread">
            <div className="flex-left">
              <Voting votes={this.props.card.votes} />
              {/* <FontAwesomeIcon icon={faUserEdit} /> */}
            </div>
            <div className="icon-section" onClick={this.handleAppendiceClick}>
              <h6>
                {this.props.card.appendices
                  ? this.props.card.appendices.length
                  : 0}
              </h6>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <div className="icon-section" onClick={this.handleEditClick}>
              <h6>
                {this.props.card.edits ? this.props.card.edits.length : 0}
              </h6>
              <FontAwesomeIcon icon={faPen} />
            </div>
            <div className="icon-section" onClick={this.handleRebelClick}>
              <h6>
                {this.props.card.actions ? this.props.card.actions.length : 0}
              </h6>
              <FontAwesomeIcon icon={faFistRaised} />
            </div>
          </div>

          {/* Opened collapsible with full demand details */}
          <Accordion.Collapse eventKey={this.props.card.id}>
            <Card.Body>
              <div className="separator"></div>

              <div>
                {/* Summary section*/}
                {this.props.isActive ? (
                  <>
                    <div className="large-number tight-header">
                      <p>Petition No</p> <div>{this.props.card.petitionNo}</div>
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
        </Card>

        {/* Show appendice section on click */}
        {this.state.showAppendiceSection && this.props.card.appendices ? (
          <Appendices appendices={this.props.card.appendices} />
        ) : null}

        {/* Show edit section on click */}
        {this.state.showEditSection && this.props.card.description
          ? this.props.card.description.map(description => {
              let originalText = description.text;
              let sectionTitle = description.section;
              return (
                <Edits
                  key={description.id}
                  edits={description.edits}
                  originalText={originalText}
                  section={sectionTitle}
                />
              );
            })
          : null}

        {/* Show action section on click */}
        {this.state.showRebelSection && this.props.card.actions
          ? this.props.card.actions.map(action => {
              return (
                <React.Fragment key={action.id}>
                  <div className="flex-spread-start">
                    {/* Collapsible */}
                    <Card className="action-section">
                      {/* Main card header */}
                      <Accordion.Toggle as={Card.Header} eventKey={action.id}>
                        {action.date}, {action.time}
                      </Accordion.Toggle>
                      {/* Opened collapsible with full demand details */}
                      <Accordion.Collapse eventKey={action.id}>
                        <Card.Body>{action.details}</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/* Joined people */}
                    <div className="small-section">
                      <Voting
                        showAsRebel={true}
                        votes={action.joined ? action.joined : 0}
                      ></Voting>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          : null}
      </div>
    );
  }

  handleAppendiceClick() {
    this.setState({
      showAppendiceSection: true,
      showRebelSection: false,
      showEditSection: false
    });
  }

  handleEditClick() {
    this.setState({
      showAppendiceSection: false,
      showRebelSection: false,
      showEditSection: true
    });
  }

  handleRebelClick() {
    this.setState({
      showAppendiceSection: false,
      showRebelSection: true,
      showEditSection: false
    });
  }
}
