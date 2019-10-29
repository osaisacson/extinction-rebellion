import React, { Component } from "react";
import Edit from "./Edit";

import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Edits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      originalText: this.props.originalText,
      edits: this.props.edits,
      section: this.props.section
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
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
            <div className="edit flex-spread">
              <h6> {this.state.section}</h6>
              <div className="icon-section">
                {this.state.edits.length}
                <FontAwesomeIcon icon={faPen} />
              </div>
            </div>
          </div>
          {this.state.open ? (
            <div className="collapsible-content full-width">
              {this.state.edits.map(edit => {
                return (
                  <Edit
                    key={edit.id}
                    edit={edit}
                    originalText={originalText}
                  ></Edit>
                );
              })}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
