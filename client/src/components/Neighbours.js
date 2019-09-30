import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class Production extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      neighbours: window.Dataset.neighbours
    };
  }

  render() {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="one-line-spread"
          >
            <h4>Grannar</h4>
            <span className="badge badge-primary badge-pill">4</span>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul className="list-group list-group-flush">
                {this.state.neighbours.map(function(item) {
                  return (
                    <li className="list-group-item one-line-left" key={item.id}>
                      <img
                        src={item.profileImg}
                        alt={item.name}
                        className="avatar"
                      ></img>
                      <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
