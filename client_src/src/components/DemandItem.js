import React, { Component } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHashtag,
  faFistRaised,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class DemandItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: props.card,
      demand: "",
      isLoading: true,
      showEdit: false,
      edits: [],
      references: [],
      actions: [],
      isSent: props.isSent
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let demandId = this.state.card.id;
    axios
      .all([
        axios.get(`http://localhost:3001/api/demands/${demandId}`),
        axios.get("http://localhost:3001/api/edits"),
        axios.get("http://localhost:3001/api/references"),
        axios.get("http://localhost:3001/api/actions")
      ])
      .then(
        axios.spread((demand, edits, references, actions) => {
          const editsArray = edits.data;
          const referencesArray = references.data;
          const actionsArray = actions.data;
          const criteria = demandId;

          const demandEdits = editsArray.filter(
            item => item.demandId === criteria
          );
          const demandReferences = referencesArray.filter(
            item => item.demandId === criteria
          );
          const demandActions = actionsArray.filter(
            item => item.demandId === criteria
          );

          this.setState({
            demand: demand.data,
            edits: demandEdits,
            references: demandReferences,
            actions: demandActions,
            isLoading: false
          });
        })
      )
      .catch(err => console.log("error in DemandItem.js:getData()", err));
  }

  render() {
    const { card, edits, references, actions } = this.state;

    let isSuggested = card.isBeingDefined;
    let cardBackgroundType = isSuggested ? "suggested" : "sent";

    return (
      <div className={`card-wrapper ${cardBackgroundType}`} key={card.id}>
        <div className="flex-spread">
          <div className="card-indicators">
            <div as={Card.Header} className="icon-section">
              {card.isSent ? (
                <>
                  <h6>{edits ? edits.length : 0}</h6>
                  <FontAwesomeIcon icon={faBook} />
                </>
              ) : (
                <>
                  <h6>{edits ? edits.length : 0}</h6>
                  <FontAwesomeIcon icon={faWrench} />
                </>
              )}
            </div>
            <div as={Card.Header} className="icon-section">
              <h6>{references ? references.length : 0}</h6>
              <FontAwesomeIcon icon={faHashtag} />
            </div>
            <div as={Card.Header} className="icon-section">
              <h6>{actions ? actions.length : 0}</h6>
              <FontAwesomeIcon icon={faFistRaised} />
            </div>
          </div>

          {/* Section with votes, appears outside toggle so can use the voting functionality */}
          <Voting
            votes={card.votes}
            isSent={card.isSent}
            cardId={card.id}
            voteLimit={10}
          />
        </div>
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
          </Link>
        </Card>
      </div>
    );
  }
}
