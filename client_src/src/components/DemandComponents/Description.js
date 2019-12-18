import React, { Component } from "react";

export default class Description extends Component {
  render() {
    const { demand } = this.props;

    return (
      <>
        <div className="tight-header text-align-right">
          <p>Responsible representative</p>
          <p className="bold">
            {demand.representative
              ? demand.representative
              : "No representative yet"}
          </p>
        </div>

        <h6 className="bold">Summary</h6>
        <p>{demand.summary ? demand.summary : "No summary yet"}</p>
        <h6 className="bold">Background</h6>
        <p>{demand.background ? demand.background : "No background yet"}</p>
        <h6 className="bold">Indicators</h6>
        <p>{demand.indicators ? demand.indicators : "No indicators yet"}</p>
      </>
    );
  }
}
