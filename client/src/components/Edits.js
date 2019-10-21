import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Voting from "./Voting";

export default class Edits extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.edits.map(function(item) {
          return (
            <Card key={item.id}>
              <div className="edit">
                <div className="tight-header">
                  <div className="one-line-spread">
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                  </div>
                </div>
                <h6>{item.title}</h6>
              </div>

              <div className="separator"></div>
              <div className="action-section">
                <Voting votes={item.votes} />
                <Accordion.Toggle as={Card.Header} eventKey={item.id + 1}>
                  <div className="icon-section">
                    <button>click me</button>
                  </div>
                </Accordion.Toggle>
              </div>
              <div className="separator"></div>

              <Accordion.Collapse eventKey={item.id + 1}>
                <Card.Body>
                  {" "}
                  <div>{item.edit}</div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </>
    );
  }
}
