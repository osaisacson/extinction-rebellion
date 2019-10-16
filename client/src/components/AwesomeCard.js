import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import MainHeader from "./MainHeader";
import Voting from "./Voting";
import Stages from "./Stages";

export default class AwesomeCard extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent
    };
  }

  render() {
    return (
      <Accordion>
        {this.state.cardcontent.map(function(item) {
          return (
            <React.Fragment key={item.id}>
              <Card>
                <MainHeader
                  country={item.country}
                  city={item.city}
                  issue={item.issue}
                  postedBy={item.postedBy}
                />
                <h5>{item.title}</h5>
                <div className="separator"></div>
                <Stages stages={item.stages ? item.stages : []} />
                <div className="separator"></div>
                <div className="action-section">
                  <Voting votes={item.votes} />
                  <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                    {item.isActive ? (
                      <div className="icon-section">
                        <button className="fa-icons petitionIcon">
                          <i className="fas fa-file"></i>
                        </button>
                      </div>
                    ) : null}
                    {item.isDiscussed ? (
                      <div className="icon-section">
                        <button className="fa-icons commentIcon">
                          <i className="fas fa-comment"></i>
                        </button>
                      </div>
                    ) : null}
                    {item.isActive && item.stages === "Rebel" ? (
                      <div className="icon-section">
                        <button className="fa-icons actionIcon">
                          <i className="fas fa-fist-raised"></i>
                        </button>
                      </div>
                    ) : null}
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey={item.id}>
                  <Card.Body>
                    <p>{item.description}</p>
                    {/* <Content content={item.content ? item.content : []} /> */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </React.Fragment>
          );
        })}
      </Accordion>
    );
  }
}
