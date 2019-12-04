import React, { Component } from "react";
import Edit from "./Edit";
import axios from "axios";

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      edits: []
    };
  }

  componentDidMount() {
    this.getEdits();
  }

  getEdits() {
    let demandId = this.props.demand.id;
    axios
      .all([axios.get(`http://localhost:3001/api/edits/${demandId}`)])
      .then(
        axios.spread(edits => {
          const editsArray = edits.data;
          const criteria = demandId;
          const demandEdits = editsArray.filter(
            item => item.demandId === criteria
          );
          this.setState({
            edits: demandEdits,
            isLoading: false
          });
        })
      )
      .catch(err => console.log("error in Description.js:getEdits()", err));
  }

  render() {
    const { demand } = this.props;
    const { edits } = this.state;

    return (
      <>
        {/* Show if the demand is completed*/}
        {demand.isSent ? (
          <>
            <h6>
              We together made <span className="bold">{edits.length}</span>{" "}
              edits. <br></br>Add references supporting the demand in the
              hashtag section above, and start actions to push it through
              parliament in the rebel section.
            </h6>
            <div className="separator"></div>
          </>
        ) : (
          <h6>Being defined. Edit and add below.</h6>
        )}
        {/* Show if demand is in the suggested state */}
        <>
          <div className="small-card-header">
            <div className="tight-header">
              <p className="grey">By: {demand.postedBy}</p>
            </div>
            <div>
              <div className="tight-header">
                <p>Responsible representative</p>
                <p className="bold">{demand.representative}</p>
              </div>
            </div>
          </div>
          <h6 className="bold">Country</h6>
          <p>{demand.country}</p>
          <h6 className="bold">City</h6>
          <p>{demand.city}</p>
          <h6 className="bold">Summary</h6>
          <p>{demand.summary}</p>
          <h6 className="bold">Background</h6>
          <p>{demand.background}</p>
          <h6 className="bold">Indicators</h6>
          <p>{demand.indicators}</p>
        </>
        {/* Loop over edits belonging to this demand */}
        {!demand.isSent && edits.length ? (
          <>
            {edits.map(edit => {
              return <Edit key={edit.id} edits={edit} />;
            })}
          </>
        ) : (
          <h5>No edits yet</h5>
        )}
      </>
    );
  }
}
