import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class Notifications extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      notifications: window.Dataset.notifications
    };
  }

  render() {
    return (
      <div className="notifications-custom-div">
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <div className="header-and-badge">
                <span>Uppdateringar </span>
                <Badge variant="danger">2</Badge>
              </div>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {this.state.notifications.map(function(item) {
                  return (
                    <div
                      key={item.id}
                      className={`notification-custom ${item.class}`}
                    >
                      {item.description}
                    </div>
                  );
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
