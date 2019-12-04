import React, { Component } from "react";
// import Edit from "./Edit";
// import axios from "axios";

export default class Description extends Component {
  render() {
    const { demand } = this.props;

    return (
      <>
        {/* Show if the demand is completed*/}
        {demand.isSent ? (
          <>
            <h6>
              This demand was made collaboratively. Once it reached 100 votes it
              got sent to the representative.
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
      </>
    );
  }
}
