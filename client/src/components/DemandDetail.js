import React, { Component } from "react";
import axios from "axios";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import References from "./DemandComponents/References";
import Description from "./DemandComponents/Description";
import Header from "./DemandComponents/Header";

import Voting from "./Voting";

import { TwitterHashtagButton } from "react-twitter-embed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faHashtag,
  faFistRaised,
  faCheck,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class DemandDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      actions: [],
      currentDemandId: this.props.card.id,
      showDemandSection: false,
      showReferencesSection: false,
      showRebelSection: false
    };

    this.handleDemandClick = this.handleDemandClick.bind(this);
    this.handleReferencesClick = this.handleReferencesClick.bind(this);
    this.handleRebelClick = this.handleRebelClick.bind(this);
  }

  componentDidMount() {
    this.getActions();
  }

  getActions() {
    axios.get("http://localhost:3001/api/actions").then(response => {
      const actionsArray = response.data;
      const criteria = this.state.currentDemandId;

      const demandActions = actionsArray.filter(
        item => item.demandId === criteria
      );
      this.setState({ actions: demandActions, isLoading: false });
    });
  }

  render() {
    const { isSent, isSuggested, card } = this.props;

    let cardBackgroundType = isSuggested ? "suggested" : "sent";

    return (
      <div className={`card-wrapper ${cardBackgroundType}`} key={card.id}>
        {/* Section with votes, appears outside toggle so can use the voting functionality */}
        <Voting votes={card.votes} isSent={card.isSent} />

        <Card>
          <div className="demand-header">
            {/* Status */}
            {!isSuggested && card.status ? (
              <p className={`pill ${card.isRebel ? "red" : "darkblue"}`}>
                {card.status}
              </p>
            ) : null}
            {/* Country */}
            <h6>
              {card.city}, <span className="bold">{card.country}</span>
            </h6>

            {/* Main card header */}
            <h5>{card.title}</h5>
          </div>
          <div className="separator"></div>

          {/* TRIGGERS */}
          <div className="card-stats-section flex-spread">
            {/* Show full demand */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${card.id}demands`}
              className="icon-section"
              onClick={this.handleDemandClick}
            >
              {card.isSent ? (
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
              eventKey={`${card.id}references`}
              className="icon-section"
              onClick={this.handleReferencesClick}
            >
              <FontAwesomeIcon icon={faHashtag} />
            </Accordion.Toggle>
            {/* Show rebel actions */}
            <Accordion.Toggle
              as={Card.Header}
              eventKey={`${card.id}rebel`}
              className="icon-section"
              onClick={this.handleRebelClick}
            >
              <h6>{this.state.actions ? this.state.actions.length : 0}</h6>
              <FontAwesomeIcon icon={faFistRaised} />
            </Accordion.Toggle>
          </div>

          {/* CONTENT */}

          {/* Demand section */}
          {this.state.showDemandSection ? (
            <>
              <Accordion.Collapse eventKey={`${card.id}demands`}>
                <Card.Body>
                  <div>
                    {/* Summary section*/}

                    {isSuggested ? (
                      <>
                        <div className="tight-header">
                          <h6>Being defined. Edit and add below.</h6>
                        </div>
                        <div className="separator"></div>
                      </>
                    ) : null}
                  </div>
                  <p>Disabled for a sec while hooking up real data.</p>
                  {/* <Header
                    postedBy={card.postedBy}
                    representative={card.representative}
                    timeSent={card.timeSent}
                  />
                  <div className="separator"></div>
                  <Description card={card} /> */}
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* References section */}
          {this.state.showReferencesSection && card.id ? (
            <>
              <Accordion.Collapse eventKey={`${card.id}references`}>
                <Card.Body>
                  <h6>
                    To add references that support this demand:
                    <TwitterHashtagButton
                      tag={card.id}
                      options={{
                        size: "large",
                        screenName: null,
                        buttonHashtag: null
                      }}
                    />
                    Your tweet will automatically be pulled into the feed below.
                  </h6>
                  <References hashtag={card.id} />
                </Card.Body>
              </Accordion.Collapse>
            </>
          ) : null}

          {/* Action section */}
          {this.state.showRebelSection ? (
            <>
              <Accordion.Collapse eventKey={`${card.id}rebel`}>
                <Card.Body>
                  {this.state.actions ? (
                    <>
                      <h6>
                        Join by indicating so on the right, you'll get sent a
                        telegram invitation with more info.
                      </h6>
                      {this.state.actions.map(action => {
                        return (
                          <div className="rebel-card" key={action.id}>
                            {/* Joined people */}
                            <Voting
                              showAsRebel={true}
                              votes={action.joined ? action.joined : 0}
                            ></Voting>
                            <div className="rebel-content">
                              <div>
                                <h6 className="bold">
                                  {action.date}, {action.time}
                                </h6>
                                <h6>{action.details}</h6>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : null}
                  {!this.state.actions ? (
                    <>
                      <br></br>
                      <h6>There are no actions yet, start one below</h6>
                    </>
                  ) : null}
                  <div className="separator"></div>
                  <br></br>
                  <h6>
                    Create new action. Handle all communication for this action
                    via telegram, so start by{" "}
                    <a href="https://blog.en.uptodown.com/how-to-create-groups-and-channels-telegram/">
                      creating a group on telegram
                    </a>{" "}
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
