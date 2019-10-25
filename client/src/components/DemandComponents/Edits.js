import React, { Component } from "react";
import Edit from "./Edit";

import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    const originalText = this.state.originalText;
    return (
      <>
        <div className="collapsible-in-card">
          <div
            onClick={e => this.togglePanel(e)}
            className="collapsible-trigger"
          >
            <div className="edit">
              <div>
                {" "}
                {this.state.edits.length}
                <FontAwesomeIcon icon={faUserEdit} />
              </div>
            </div>
          </div>
          {this.state.open ? (
            <div className="collapsible-content full-width">
              {this.state.edits.map(edit => {
                return <Edit edit={edit} originalText={originalText}></Edit>;
              })}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
