import React, { Component } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import References from './DemandComponents/References';
import Description from './DemandComponents/Description';
import Header from './DemandComponents/Header';

import Voting from './Voting';

import { TwitterHashtagButton } from 'react-twitter-embed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBookOpen,
  faHashtag,
  faFistRaised,
  faCheck,
  faWrench
} from '@fortawesome/free-solid-svg-icons';

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
            <p
              className={`pill ${this.props.card.isRebel ? 'red' : 'darkblue'}`}
            >
              {this.props.card.status}
            </p>
          ) : null}
        </div>

        <Card>
          <div className="demand-header">
            {/* Section with votes, appears outside toggle so can use the voting functionality */}
            <Voting
              votes={this.props.card.votes}
              isSent={this.props.card.isSent}
            />
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
              {this.props.card.isSent ? (
                <>
                  <FontAwesomeIcon icon={faBook} />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="green-color icon-margin-left"
                  />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faBookOpen} />

                  <FontAwesomeIcon
                    icon={faWrench}
                    className="tweak-color icon-margin-left"
                  />
                </>
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

                    {this.props.isSuggested ? (
                      <>
                        <div className="tight-header">
                          <h6>Being defined. Edit and add below.</h6>
                        </div>
                        <div className="separator"></div>
                      </>
                    ) : null}
                  </div>
                  <Header
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
                    To add references that support this demand:
                    <TwitterHashtagButton
                      tag={this.props.card.petitionId}
                      options={{
                        size: 'large',
                        screenName: null,
                        buttonHashtag: null
                      }}
                    />
                    Your tweet will automatically be pulled into the feed below.
                  </h6>
                  <References hashtag={this.props.card.petitionId} />
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* Action section */}
          {this.state.showRebelSection ? (
            <>
              <Accordion.Collapse eventKey={`${this.props.card.id}rebel`}>
                <Card.Body>
                  {this.props.card.actions ? (
                    <>
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
                    </>
                  ) : null}
                  {!this.props.card.actions ? (
                    <>
                      <br></br>
                      <h6>There are no actions yet, start one below</h6>
                    </>
                  ) : null}
                  <div className="separator"></div>
                  <br></br>
                  <h6>
                    Create new action. Handle all communication for this action
                    via telegram, so start by{' '}
                    <a href="https://blog.en.uptodown.com/how-to-create-groups-and-channels-telegram/">
                      creating a group on telegram
                    </a>{' '}
                    and adding the name of it below.
                  </h6>
                  <form action="/" method="post">
                    <div className="flex-spread">
                      <div className="form-group">
                        <label htmlFor="date"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="date"
                          placeholder="Date"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="time"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="time"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="where"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="where"
                        placeholder="Where"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="notes"
                        placeholder="Notes"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telegram"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="telegram"
                        placeholder="Telegram"
                      />
                    </div>
                  </form>
                  <br></br>
                  <h5>Add new action</h5>
                  <br></br>
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
