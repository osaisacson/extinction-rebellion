import React, { Component } from "react";
import axios from "axios";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import AddAction from "./AddAction";
import EditDemand from "./EditDemand";

import References from "./DemandComponents/References";
import Description from "./DemandComponents/Description";

import Voting from "./Voting";

import { TwitterHashtagButton } from "react-twitter-embed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEdit,
  faBookOpen,
  faHashtag,
  faFistRaised,
  faCheck,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class DemandDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demand: "",
      isLoading: true,
      showEdit: false,
      actions: [],
      currentDemandId: props.match.params.id,
      isSent: props.isSent,
      showDemandSection: false,
      showReferencesSection: false,
      showRebelSection: false
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDemandClick = this.handleDemandClick.bind(this);
    this.handleReferencesClick = this.handleReferencesClick.bind(this);
    this.handleRebelClick = this.handleRebelClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let demandId = this.props.match.params.id;
    axios
      .all([
        axios.get(`http://localhost:3001/api/demands/${demandId}`),
        axios.get("http://localhost:3001/api/actions")
      ])
      .then(
        axios.spread((demand, actions) => {
          const actionsArray = actions.data;
          const criteria = this.state.currentDemandId;
          const demandActions = actionsArray.filter(
            item => item.demandId === criteria
          );
          this.setState({
            demand: demand.data,
            actions: demandActions,
            isLoading: false
          });
        })
      )
      .catch(err => console.log("error in DemandDetails.js:getData()", err));
  }

  onDelete() {
    let demandId = this.state.demand.id;
    axios
      .delete(`http://localhost:3001/api/demands/${demandId}`)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log("Error from DemandDetails.js:onDelete", err));
  }

  toggleEdit(e) {
    this.setState({ showEdit: !this.state.showEdit });
  }

  render() {
    const { isSent, demand } = this.state;

    let cardBackgroundType = demand.isBeingDefined ? "suggested" : "sent";

    return (
      <>
        {/* Back, edit, delete */}
        <Link className="btn grey" to={"/"}>
          Back
        </Link>
        <Link className="btn" to={`/demands/edit/${demand.id}`}>
          Edit
        </Link>
        <button onClick={this.onDelete.bind(this)} className="btn red light">
          Delete
        </button>

        {/* Details for item */}
        <div className={`card-wrapper ${cardBackgroundType}`} key={demand.id}>
          {/* Section with votes, appears outside toggle so can use the voting functionality */}
          <Voting votes={demand.votes} isSent={demand.isSent} />

          <Accordion defaultActiveKey="0">
            <Card>
              <div className="demand-header">
                {/* Status */}
                {isSent && demand.status ? (
                  <p className={`pill ${demand.isRebel ? "red" : "darkblue"}`}>
                    {demand.status}
                  </p>
                ) : null}
                {/* Country */}
                <h6>
                  {demand.city}, <span className="bold">{demand.country}</span>
                </h6>

                {/* Main card header */}
                <h5>{demand.title}</h5>
              </div>
              <div className="separator"></div>

              {/* TRIGGERS */}
              <div className="card-stats-section flex-spread">
                {/* Show full demand */}
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="icon-section"
                  onClick={this.handleDemandClick}
                >
                  {demand.isSent ? (
                    <>
                      <FontAwesomeIcon icon={faBook} />
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="green-color icon-margin-left"
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faBookOpen} />

                      <FontAwesomeIcon
                        icon={faWrench}
                        className="icon-margin-left"
                      />
                    </>
                  )}
                </Accordion.Toggle>

                {/* Show references */}
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  className="icon-section"
                  onClick={this.handleReferencesClick}
                >
                  <FontAwesomeIcon icon={faHashtag} />
                </Accordion.Toggle>
                {/* Show rebel actions */}
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className="icon-section"
                  onClick={this.handleRebelClick}
                >
                  <h6>{this.state.actions ? this.state.actions.length : 0}</h6>
                  <FontAwesomeIcon icon={faFistRaised} />
                </Accordion.Toggle>
              </div>

              {/* CONTENT */}

              {/* Demand section */}
              {this.state.showDemandSection ? (
                <>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div>
                        {/* Summary section*/}
                        {!isSent ? (
                          <>
                            <div className="tight-header">
                              <h6>Being defined. Edit and add below.</h6>
                            </div>
                            <div className="separator"></div>
                          </>
                        ) : null}
                      </div>
                      {/* Toggles the editing section of the demand */}
                      <div
                        className="edit-btn"
                        onClick={e => this.toggleEdit(e)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </div>
                      {/* Editing section of the demand */}
                      {this.state.showEdit ? (
                        <EditDemand demandId={demand.id} />
                      ) : (
                        <Description demand={demand} />
                      )}
                    </Card.Body>
                  </Accordion.Collapse>
                </>
              ) : null}

              {/* References section */}
              {this.state.showReferencesSection && demand.id ? (
                <>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <h6>
                        To add references that support this demand:
                        <TwitterHashtagButton
                          tag={demand.id}
                          options={{
                            size: "large",
                            screenName: null,
                            buttonHashtag: null
                          }}
                        />
                        Your tweet will automatically be pulled into the feed
                        below.
                      </h6>
                      <References hashtag={demand.id} />
                    </Card.Body>
                  </Accordion.Collapse>
                </>
              ) : null}

              {/* Action section */}
              {this.state.showRebelSection ? (
                <>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      {this.state.actions ? (
                        <>
                          <h6>
                            Join by clicking the join button on the right of the
                            action, you'll get sent a telegram invitation with
                            more info.
                          </h6>
                          {this.state.actions.map(action => {
                            return (
                              <div className="rebel-card" key={action.id}>
                                {/* Joined people */}
                                <Voting
                                  showAsRebel={true}
                                  votes={action.joined ? action.joined : 0}
                                ></Voting>
                                <div className="rebel-content">
                                  <div>
                                    <h6 className="bold">
                                      {action.date}, {action.time}
                                    </h6>
                                    <h6>{action.name}</h6>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </>
                      ) : null}
                      {!this.state.actions ? (
                        <>
                          <br></br>
                          <h6>There are no actions yet, start one below</h6>
                        </>
                      ) : null}
                      <div className="separator"></div>
                      <br></br>
                      {/* Add new action */}
                      <AddAction demandId={demand.id} />
                      {/* <Link to={`/${demand.id}/add-action`}>
                        <div className="add-button">
                          <FontAwesomeIcon icon={faPlus} />
                        </div>
                      </Link> */}
                      <br></br>
                    </Card.Body>
                  </Accordion.Collapse>
                </>
              ) : null}
            </Card>
          </Accordion>
        </div>
      </>
    );
  }

  handleDemandClick() {
    this.setState({
      showDemandSection: true,
      showReferencesSection: false,
      showRebelSection: false
    });
  }

  handleReferencesClick() {
    this.setState({
      showDemandSection: false,
      showReferencesSection: true,
      showRebelSection: false
    });
  }

  handleRebelClick() {
    this.setState({
      showDemandSection: false,
      showReferencesSection: false,
      showRebelSection: true
    });
  }
}
