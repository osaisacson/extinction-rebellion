import React, { Component } from "react";
import axios from "axios";

import { Tabs, Tab } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import AddAction from "./AddAction";
import AddEdit from "./AddEdit";

import EditDemand from "./EditDemand";

import Description from "./DemandComponents/Description";

import Voting from "./Voting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEdit,
  faFistRaised,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

export default class DemandDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demand: "",
      isLoading: true,
      showDescription: true,
      showEdit: false,
      edits: [],
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
        axios.get(
          `https://extinction-rebellion.herokuapp.com/api/demands/${demandId}`
        ),
        axios.get("https://extinction-rebellion.herokuapp.com/api/edits"),
        axios.get("https://extinction-rebellion.herokuapp.com/api/actions")
      ])
      .then(
        axios.spread((demand, edits, actions) => {
          const editsArray = edits.data;
          const actionsArray = actions.data;
          const criteria = this.state.currentDemandId;

          const demandEdits = editsArray.filter(
            item => item.demandId === criteria
          );

          const demandActions = actionsArray.filter(
            item => item.demandId === criteria
          );

          this.setState({
            demand: demand.data,
            edits: demandEdits,
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
      .delete(
        `https://extinction-rebellion.herokuapp.com/api/demands/${demandId}`
      )
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log("Error from DemandDetails.js:onDelete", err));
  }

  toggleEdit(e) {
    this.setState({
      showEdit: !this.state.showEdit,
      showDescription: !this.state.showDescription
    });
  }

  render() {
    const { demand, edits, actions, showEdit, showDescription } = this.state;

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

          <Card>
            {/* Main card header */}
            <div className="demand-header">
              <h6>
                {demand.city}, <span className="bold">{demand.country}</span>
              </h6>
              <h5>{demand.title}</h5>
            </div>
            <div className="separator"></div>

            {/* Card Tabs */}
            <Tabs defaultActiveKey={1}>
              {/* Demand description tab trigger */}
              <Tab
                eventKey={1}
                title={
                  <span className="icon-section card-header">
                    <FontAwesomeIcon icon={faBook} />
                  </span>
                }
              >
                <Card.Body className={cardBackgroundType}>
                  <div>
                    {/* Demand description section, if the user is in editing mode this section is hidden*/}
                    {showDescription ? <Description demand={demand} /> : null}
                    {/* Toggles the diting section of the demand, gets accepted directly and should only be accessed by admin */}
                    <div className="edit-btn" onClick={e => this.toggleEdit(e)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </div>
                    {showEdit ? <EditDemand demandId={demand.id} /> : null}
                  </div>
                </Card.Body>
              </Tab>

              <Tab
                eventKey={2}
                title={
                  <span className="icon-section card-header">
                    {" "}
                    <h6>{edits ? edits.length : 0}</h6>
                    <FontAwesomeIcon icon={faWrench} />
                  </span>
                }
              >
                <Card.Body className={cardBackgroundType}>
                  {/* Edits - these are not automatically accepted, but instead end up in a separate model */}
                  {edits ? (
                    <>
                      <h5>Proposed edits</h5>
                      {edits.map(edit => {
                        return (
                          <div className="rebel-card" key={edit.id}>
                            {/* Joined people */}
                            <Voting
                              voteLimit={10}
                              votes={edit.editVotes ? edit.editVotes : 0}
                            ></Voting>
                            <div className="rebel-content">
                              <div>
                                <>
                                  <h6>{edit.editSummary}</h6>
                                  <div className="tight-header">
                                    <p className="grey">By: {edit.by}</p>
                                    <br></br>
                                    <div>
                                      <p className="bold">
                                        Responsible representative
                                      </p>
                                      <p> {edit.representative}</p>
                                    </div>
                                    <div>
                                      <p className="bold">
                                        Representative email
                                      </p>
                                      <p> {edit.representativeEmail}</p>
                                    </div>
                                    <div>
                                      <p className="bold">Country</p>
                                      <p>{edit.country}</p>
                                    </div>
                                    <div>
                                      <p className="bold">City</p>
                                      <p>{edit.city}</p>
                                    </div>
                                    <div>
                                      <p className="bold">Summary</p>
                                      <p>{edit.summary}</p>
                                    </div>
                                    <div>
                                      <p className="bold">Background</p>
                                      <p>{edit.background}</p>
                                    </div>
                                    <div>
                                      <p className="bold">Indicators</p>
                                      <p>{edit.indicators}</p>
                                    </div>
                                  </div>
                                </>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : null}
                  {!edits ? (
                    <>
                      <br></br>
                      <h6>There are no edits yet, start one below</h6>
                    </>
                  ) : null}

                  <div className="separator"></div>
                  <br></br>
                  {/* Add new action */}
                  <AddEdit demand={demand} />

                  <br></br>
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
                  {actions.length ? (
                    <>
                      <h6>
                        Join by clicking the join button on the right of the
                        action, you'll get sent a telegram invitation with more
                        info.
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
                  {!actions.length ? (
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
        </div>
      </>
    );
  }
}
