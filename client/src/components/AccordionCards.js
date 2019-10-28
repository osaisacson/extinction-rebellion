import React, { Component } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Description from './DemandComponents/Description';
import Header from './DemandComponents/Header';
import Edits from './DemandComponents/Edits';

import Voting from './Voting';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import Appendices from './DemandComponents/Appendices';

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
      isSuggested: this.props.isSuggested,
      showAppendiceSection: false,
      showEditSection: false,
      showRebelSection: false
    };

    this.handleAppendiceClick = this.handleAppendiceClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleRebelClick = this.handleRebelClick.bind(this);
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
                  <div className="card-wrapper" key={card.id}>
                    {/* Country and status indicator, shows outside card */}
                    <div className="flex-spread-end">
                      {/* Country */}
                      <div className="header-with-background">
                        {card.city},{' '}
                        <span className="bold">{card.country}</span>
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
                            this.state.isRebel ? 'red' : 'darkblue'
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

                      {/* Section with card stats, appears outside toggle so can use the voting functionality */}
                      <div className="separator"></div>
                      <div className="card-stats-section flex-spread">
                        <div className="flex-left">
                          <Voting votes={card.votes} />
                          {/* <FontAwesomeIcon icon={faUserEdit} /> */}
                        </div>
                        <div
                          className="icon-section"
                          onClick={this.handleAppendiceClick}
                        >
                          <h6>
                            {card.appendices ? card.appendices.length : 0}
                          </h6>
                          <FontAwesomeIcon icon={faBook} />
                        </div>
                        <div
                          className="icon-section"
                          onClick={this.handleEditClick}
                        >
                          <h6>{card.edits ? card.edits.length : 0}</h6>
                          <FontAwesomeIcon icon={faPen} />
                        </div>
                        <div
                          className="icon-section"
                          onClick={this.handleRebelClick}
                        >
                          <h6>{card.actions ? card.actions.length : 0}</h6>
                          <FontAwesomeIcon icon={faFistRaised} />
                        </div>
                      </div>

                      {/* Opened collapsible with full demand details */}
                      <Accordion.Collapse eventKey={card.id}>
                        <Card.Body>
                          <div className="separator"></div>

                          <div>
                            {/* Summary section*/}
                            {this.state.isActive ? (
                              <>
                                <div className="large-number tight-header">
                                  <p>Petition No</p>{' '}
                                  <div>{card.petitionNo}</div>
                                </div>
                                <div className="separator"></div>
                              </>
                            ) : null}
                            {this.state.isSuggested ? (
                              <>
                                <div className="tight-header">
                                  <p>Being defined. Edit and add below.</p>{' '}
                                </div>
                                <div className="separator"></div>
                              </>
                            ) : null}
                          </div>
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

                    {/* Show appendice section on click */}
                    {this.state.showAppendiceSection && card.appendices ? (
                      <Appendices appendices={card.appendices} />
                    ) : null}

                    {/* Show edit section on click */}
                    {this.state.showEditSection && card.description
                      ? card.description.map(description => {
                          let originalText = description.text;
                          let sectionTitle = description.section;
                          return (
                            <Edits
                              edits={description.edits}
                              originalText={originalText}
                              section={sectionTitle}
                            />
                          );
                        })
                      : null}

                    {/* Show action section on click */}
                    {this.state.showRebelSection && card.actions
                      ? card.actions.map(action => {
                          return (
                            <React.Fragment key={action.id}>
                              <div className="flex-spread-start">
                                {/* Collapsible */}
                                <Card className="action-section">
                                  {/* Main card header */}
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey={action.id}
                                  >
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
              })}
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
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
