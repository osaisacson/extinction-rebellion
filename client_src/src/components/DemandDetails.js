import React, { Component } from "react";
import axios from "axios";

import Accordion from "react-bootstrap/Accordion";
import { Tabs, Tab } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import AddAction from "./AddAction";
import EditDemand from "./EditDemand";

import Description from "./DemandComponents/Description";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEdit,
  faHashtag,
  faFistRaised,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class DemandDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demand: "",
      isLoading: true,
      showEdit: false,
      edits: [],
      references: [],
      actions: [],
      currentDemandId: props.match.params.id
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let demandId = this.props.match.params.id;
    axios
      .all([
        axios.get(`http://localhost:3001/api/demands/${demandId}`),
        axios.get("http://localhost:3001/api/edits"),
        axios.get("http://localhost:3001/api/references"),
        axios.get("http://localhost:3001/api/actions")
      ])
      .then(
        axios.spread((demand, edits, references, actions) => {
          const editsArray = edits.data;
          const referencesArray = references.data;
          const actionsArray = actions.data;
          const criteria = this.state.currentDemandId;

          const demandEdits = editsArray.filter(
            item => item.demandId === criteria
          );
          const demandReferences = referencesArray.filter(
            item => item.demandId === criteria
          );
          const demandActions = actionsArray.filter(
            item => item.demandId === criteria
          );

          this.setState({
            demand: demand.data,
            edits: demandEdits,
            references: demandReferences,
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
    const { demand, edits, references, actions, showEdit } = this.state;

    let cardBackgroundType = demand.isBeingDefined ? "suggested" : "sent";

    return (
      <>
        {/* Back, edit, delete */}
        <Link className="btn grey" to={"/"}>
          Back
        </Link>
        <button onClick={this.onDelete.bind(this)} className="btn red light">
          Delete
        </button>

        {/* Details for item */}
        <div className={`card-wrapper ${cardBackgroundType}`} key={demand.id}>
          {/* Section with votes, appears outside toggle so can use the voting functionality */}
          <Voting
            votes={demand.votes}
            isSent={demand.isSent}
            cardId={demand.id}
            voteLimit={10}
          />

          <Accordion defaultActiveKey="0">
            <Card>
              <div className="demand-header">
                {/* Country */}
                <h6>
                  {demand.city}, <span className="bold">{demand.country}</span>
                </h6>

                {/* Main card header */}
                <h5>{demand.title}</h5>
              </div>
              <div className="separator"></div>

              <Tabs defaultActiveKey={1}>
                <Tab
                  eventKey={1}
                  title={
                    <span className="icon-section card-header">
                      {demand.isSent ? (
                        <>
                          <h6>{edits ? edits.length : 0}</h6>
                          <FontAwesomeIcon icon={faBook} />
                        </>
                      ) : (
                        <>
                          <h6>{edits ? edits.length : 0}</h6>
                          <FontAwesomeIcon icon={faWrench} />
                        </>
                      )}{" "}
                    </span>
                  }
                >
                  <Card.Body className={cardBackgroundType}>
                    <div>
                      {/* Summary section*/}
                      {!demand.isSent ? (
                        <>
                          {/* Toggles the editing section of the demand */}
                          <div
                            className="edit-btn"
                            onClick={e => this.toggleEdit(e)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </div>
                          {/* Editing section of the demand */}
                          {showEdit ? (
                            <EditDemand demandId={demand.id} />
                          ) : null}
                        </>
                      ) : (
                        <Description demand={demand} />
                      )}
                    </div>
                  </Card.Body>
                </Tab>
                <Tab
                  eventKey={2}
                  title={
                    <span className="icon-section card-header">
                      {" "}
                      <h6>{references ? references.length : 0}</h6>
                      <FontAwesomeIcon icon={faHashtag} />
                    </span>
                  }
                >
                  <Card.Body className={cardBackgroundType}>
                    <h6>
                      To add references that support this demand: Your tweet
                      will automatically be pulled into the feed below.
                    </h6>
                    {/* <References hashtag={demand.id} /> */}
                  </Card.Body>{" "}
                </Tab>
                <Tab
                  eventKey={3}
                  title={
                    <span className="icon-section card-header">
                      {" "}
                      <h6>{actions ? actions.length : 0}</h6>
                      <FontAwesomeIcon icon={faFistRaised} />
                    </span>
                  }
                >
                  <Card.Body className={cardBackgroundType}>
                    {actions ? (
                      <>
                        <h6>
                          Join by clicking the join button on the right of the
                          action, you'll get sent a telegram invitation with
                          more info.
                        </h6>
                        {actions.map(action => {
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
                    {!actions ? (
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
                  </Card.Body>{" "}
                </Tab>
              </Tabs>
            </Card>
          </Accordion>
        </div>
      </>
    );
  }
}
