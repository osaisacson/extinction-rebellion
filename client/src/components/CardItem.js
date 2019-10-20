import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import MainHeader from './MainHeader';
import Voting from './Voting';
import Stages from './Stages';

export default class CardItem extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent,
      key: this.props.key
    };
  }

  render() {
    return (
      <Card key={this.state.key}>
        <MainHeader
          country={this.state.cardcontent.country}
          city={this.state.cardcontent.city}
          issue={this.state.cardcontent.issue}
          postedBy={this.state.cardcontent.postedBy}
        />
        <h5>{this.state.cardcontent.title}</h5>

        {this.state.cardcontent.stages ? (
          <>
            <div className="separator"></div>
            <Stages stages={this.state.cardcontent.stages} />
          </>
        ) : null}

        <div className="separator"></div>
        <div className="action-section">
          <Voting votes={this.state.cardcontent.votes} />
          <Accordion.Toggle
            as={Card.Header}
            eventKey={this.state.cardcontent.id}
          >
            {this.state.cardcontent.isActive ? (
              <div className="icon-section">
                <button className="fa-icons petitionIcon">
                  <i className="fas fa-file"></i>
                </button>
              </div>
            ) : null}
            {this.state.cardcontent.isDiscussed ? (
              <div className="icon-section">
                <button className="fa-icons commentIcon">
                  <i className="fas fa-comment"></i>
                </button>
              </div>
            ) : null}
            {this.state.cardcontent.isActive &&
            this.state.cardcontent.stages === 'Rebel' ? (
              <div className="icon-section">
                <button className="fa-icons actionIcon">
                  <i className="fas fa-fist-raised"></i>
                </button>
              </div>
            ) : null}
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey={this.state.cardcontent.id}>
          <Card.Body>
            <p>{this.state.cardcontent.description}</p>
            {/* <Content content={item.content ? item.content : []} /> */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}