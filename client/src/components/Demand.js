import React, { Component } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Appendices from './DemandComponents/Appendices';
import Edits from './DemandComponents/Edits';
import Description from './DemandComponents/Description';
import Header from './DemandComponents/Header';

import Voting from './Voting';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faQuoteRight,
  faPen,
  faFistRaised
} from '@fortawesome/free-solid-svg-icons';

export default class Demands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDemandSection: false,
      showAppendiceSection: false,
      showEditSection: false,
      showRebelSection: false
    };

    this.handleDemandClick = this.handleDemandClick.bind(this);
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
            {this.props.card.city},{' '}
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
            <p className={`pill ${this.props.isRebel ? 'red' : 'darkblue'}`}>
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
              onClick={this.handleDemandClick}
            >
              <FontAwesomeIcon icon={faBook} />
            </Accordion.Toggle>
            {/* Show edits */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${this.props.card.id}edits`}
              className="icon-section"
              onClick={this.handleEditClick}
            >
              <h6>
                {this.props.card.edits ? this.props.card.edits.length : 0}
              </h6>
              <FontAwesomeIcon icon={faPen} />
            </Accordion.Toggle>
            {/* Show appendices */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${this.props.card.id}appendices`}
              className="icon-section"
              onClick={this.handleAppendiceClick}
            >
              <h6>
                {this.props.card.appendices
                  ? this.props.card.appendices.length
                  : 0}
              </h6>
              <FontAwesomeIcon icon={faQuoteRight} />
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
                          <p>Petition No</p>{' '}
                          <div>{this.props.card.petitionNo}</div>
                        </div>
                        <div className="separator"></div>
                      </>
                    ) : null}
                    {this.props.isSuggested ? (
                      <>
                        <div className="tight-header">
                          <p>Being defined. Edit and add below.</p>{' '}
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

          {/* Appendice section */}
          {this.state.showAppendiceSection && this.props.card.appendices ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}appendices`}>
                <Card.Body>
                  <Appendices appendices={this.props.card.appendices} />
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* Edit section */}
          {this.state.showEditSection && this.props.card.description ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}edits`}>
                <Card.Body>
                  {this.props.card.description.map(description => {
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
                  })}
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* Action section */}
          {this.state.showRebelSection && this.props.card.actions ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}rebel`}>
                <Card.Body>
                  {this.props.card.actions.map(action => {
                    return (
                      <React.Fragment key={action.id}>
                        <div className="action-section tight-header">
                          <div className="flex-spread">
                            <div>
                              <h5>
                                {action.date}, {action.time}
                              </h5>
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
      showAppendiceSection: false,
      showRebelSection: false,
      showEditSection: false
    });
  }

  handleAppendiceClick() {
    this.setState({
      showDemandSection: false,
      showAppendiceSection: true,
      showRebelSection: false,
      showEditSection: false
    });
  }

  handleEditClick() {
    this.setState({
      showDemandSection: false,
      showAppendiceSection: false,
      showRebelSection: false,
      showEditSection: true
    });
  }

  handleRebelClick() {
    this.setState({
      showDemandSection: false,
      showAppendiceSection: false,
      showRebelSection: true,
      showEditSection: false
    });
  }
}
