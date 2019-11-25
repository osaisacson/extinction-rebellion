import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpen,
  faHashtag,
  faFistRaised,
  faCheck,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class DemandItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: props.card
    };
  }

  render() {
    const { card } = this.state;

    let isSuggested = card.isBeingDefined;
    let cardBackgroundType = isSuggested ? "suggested" : "sent";

    return (
      <div className={`card-wrapper ${cardBackgroundType}`} key={card.id}>
        {/* Section with votes, appears outside toggle so can use the voting functionality */}
        <Voting votes={card.votes} isSent={card.isSent} />

        <Card>
          <Link to={`/demands/${card.id}`}>
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
              <h6>{card.summary}</h6>
            </div>

            <div className="separator"></div>

            {/* TRIGGERS */}
            <div className="card-stats-section flex-spread">
              {/* Show full demand */}
              <div as={Card.Header} className="icon-section">
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
                      className="icon-margin-left"
                    />
                  </>
                )}
              </div>
              <div as={Card.Header} className="icon-section">
                <FontAwesomeIcon icon={faHashtag} />
              </div>
              <div as={Card.Header} className="icon-section">
                <h6>{this.state.actions ? this.state.actions.length : 0}</h6>
                <FontAwesomeIcon icon={faFistRaised} />
              </div>
            </div>
          </Link>
        </Card>
      </div>
    );
  }
}
