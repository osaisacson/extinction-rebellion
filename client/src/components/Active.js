import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Voting from "./Voting";
import Content from "./Content";
import Stages from "./Stages";

export default class Active extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      active: window.Dataset.active
    };
  }

  render() {
    return (
      <Accordion>
        {this.state.active.map(function(item) {
          return (
            <React.Fragment>
              <Stages stages={item.stages ? item.stages : []} />
              <Card key={item.id}>
                <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                  <div className="voting-and-title">
                    <Voting votes={item.votes} />
                    <h5>{item.title}</h5>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={item.id}>
                  <Card.Body>
                    <p>{item.description}</p>
                    <Content content={item.content ? item.content : []} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <br></br>
              <br></br>
            </React.Fragment>
          );
        })}
      </Accordion>
    );
  }
}
