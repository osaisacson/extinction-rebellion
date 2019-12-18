import React, { Component } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
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
        axios.get(
          `https://extinction-rebellion.herokuapp.com/api/demands/${demandId}`
        ),
        axios.get("https://extinction-rebellion.herokuapp.com/api/edits"),
        axios.get("https://extinction-rebellion.herokuapp.com/api/actions")
      ])
      .then(
        axios.spread((demand, edits, actions) => {
          const editsArray = edits.data;
          const actionsArray = actions.data;
          const criteria = demandId;

          const demandEdits = editsArray.filter(
            item => item.demandId === criteria
          );
          const demandActions = actionsArray.filter(
            item => item.demandId === criteria
          );

          this.setState({
            demand: demand.data,
            edits: demandEdits,
            actions: demandActions,
            isLoading: false
          });
        })
      )
      .catch(err => console.log("error in DemandItem.js:getData()", err));
  }

  render() {
    const { card, edits, actions } = this.state;

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
