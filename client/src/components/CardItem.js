import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Appendices from './Appendices';
import Edits from './Edits';
import PetitionDefinition from './PetitionDefinition';
import MainHeader from './MainHeader';
import Voting from './Voting';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CardItem extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent,
      key: this.props.key,
      content: this.props.votes
    };

    this.handlePetitionClick = this.handlePetitionClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleRebelClick = this.handleRebelClick.bind(this);
  }

  render() {
    return (
      <Card key={this.state.key}>
        <h5>{this.state.cardcontent.title}</h5>
        <div className="separator"></div>

        <MainHeader
          country={this.state.cardcontent.country}
          city={this.state.cardcontent.city}
          issue={this.state.cardcontent.issue}
          postedBy={this.state.cardcontent.postedBy}
          representative={this.state.cardcontent.representative}
          timeSent={this.state.cardcontent.timeSent}
          status={this.state.cardcontent.status}
          isRebel={this.state.cardcontent.isRebel}
        />

        <div className="separator"></div>
        <div className="action-section">
          <Voting votes={this.state.cardcontent.votes} />
          <Accordion.Toggle
            as={Card.Header}
            eventKey={this.state.cardcontent.id}
          >
            <div className="icon-section">
              <button
                id="petition"
                className="fa-icons petitionIcon"
                onClick={this.handlePetitionClick}
              >
                <i className="fas fa-file"></i>
              </button>
            </div>
          </Accordion.Toggle>

          {this.state.cardcontent.isDiscussed ? (
            <Accordion.Toggle
              as={Card.Header}
              eventKey={this.state.cardcontent.id}
            >
              <div className="icon-section">
                <button
                  id="edit"
                  className="fa-icons commentIcon"
                  onClick={this.handleEditClick}
                >
                  <div className="icon-section">
                    <h6>{this.state.cardcontent.comments}</h6>
                    <FontAwesomeIcon icon={faUserEdit} />
                  </div>
                </button>
              </div>
            </Accordion.Toggle>
          ) : null}

          {this.state.cardcontent.isRebel ? (
            <Accordion.Toggle
              as={Card.Header}
              eventKey={this.state.cardcontent.id}
            >
              <div className="icon-section">
                <button
                  id="action"
                  className="fa-icons actionIcon"
                  onClick={this.handleRebelClick}
                >
                  <FontAwesomeIcon icon={faFistRaised} />
                </button>
              </div>
            </Accordion.Toggle>
          ) : null}
        </div>
        <div className="separator"></div>

        <Accordion.Collapse eventKey={this.state.cardcontent.id}>
          <Card.Body>{this.state.content}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
  handlePetitionClick() {
    this.setState({
      content: (
        <>
          <p>{this.state.cardcontent.description}</p>

          <PetitionDefinition
            summary={this.state.cardcontent.summary}
            background={this.state.cardcontent.background}
            affectedRegion={this.state.cardcontent.affectedRegion}
            successIndicators={this.state.cardcontent.successIndicators}
          ></PetitionDefinition>

          <Appendices
            appendices={
              this.state.cardcontent.appendices
                ? this.state.cardcontent.appendices
                : []
            }
          ></Appendices>
        </>
      )
    });
  }

  handleEditClick() {
    this.setState({
      content: (
        <>
          <Edits
            edits={
              this.state.cardcontent.edits ? this.state.cardcontent.edits : []
            }
          ></Edits>
        </>
      )
    });
  }

  handleRebelClick() {
    this.setState({
      content: 'Rebel Content'
    });
  }
}
