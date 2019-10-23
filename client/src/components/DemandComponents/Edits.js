import React, { Component } from "react";
import Voting from "./../Voting";

export default class Edits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      originalText: this.props.originalText,
      edits: this.props.edits
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  componentDidUpdate() {
    // this.props.onToggle(this.props.index);
  }

  render() {
    return (
      <>
        {this.state.edits.map(edit => {
          return (
            <div key={edit.id} className="collapsible-in-card">
              <div
                onClick={e => this.togglePanel(e)}
                className="collapsible-trigger"
              >
                <div className="edit flex-spread">
                  <div className="tight-header">
                    <p className="grey-color">
                      {edit.date ? edit.date : "No date"}
                    </p>
                    <p className="bold margin-bottom-10px">"{edit.title}"</p>
                    <p>{edit.name ? edit.name : "No name"}</p>
                  </div>
                  <Voting
                    votes={edit.votes}
                    acceptedVoteNumber={100}
                    specialClass={"border-left"}
                  />
                </div>
              </div>

              {this.state.open ? (
                <div className="collapsible-content">
                  <div className="separator"></div>
                  <div className="compare-commits">
                    <div className="edit-section">
                      <p className="bold">Original:</p>
                      <p>{this.state.originalText}</p>
                    </div>
                    <div className="edit-section">
                      <p className="bold">Edit:</p>
                      <p className="changes">{edit.edit}</p>
                    </div>
                  </div>{" "}
                </div>
              ) : null}
            </div>
          );
        })}
      </>
    );
  }
}
