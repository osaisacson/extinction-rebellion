import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class Content extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Accordion>
        {this.props.content.map(function(item) {
          return (
            <Card key={item.id}>
              <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                <div className="voting-and-title">
                  <h5>{item.test}</h5>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={item.id}>
                <Card.Body>{item.test}</Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}
