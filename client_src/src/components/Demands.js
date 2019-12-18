import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import DemandItem from "./DemandItem";

export default class Demands extends Component {
  render() {
    const {
      header,
      subheader,
      backgroundColor,
      demands,
      isSent,
      isSuggested
    } = this.props;

    return (
      <div className="demand-section">
        <Card>
          <div className={`demand-section-header ${backgroundColor}`}>
            <Link to="/add-demand">
              <div className="add-button">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Link>
            <h2>
              {header} ({demands.length || 0})
            </h2>
            <div className="tight-header no-margin">
              <p>{subheader}</p>
            </div>
          </div>
          {/* Collapsed accordion section with all demands in the set */}
          <Card.Body>
            <Accordion>
              {!demands.length ? (
                <div className="tight-header">
                  <p className="text-center">(Nothing here yet.)</p>
                </div>
              ) : null}
              {demands.map(card => {
                return (
                  <DemandItem
                    key={card.id}
                    card={card}
                    isSent={isSent}
                    isSuggested={isSuggested}
                  ></DemandItem>
                );
              })}
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
