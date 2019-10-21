import React, { Component } from "react";

import Collapsible from "./Collapsible";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Edits extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      isDiscussed: this.props.isDiscussed,
      comments: this.props.comments,
      originalText: this.props.originalText
    };
  }

  render() {
    let comments = this.state.comments;
    let originalText = this.state.originalText;

    return (
      <>
        {this.state.isDiscussed ? (
          <>
            <div className="flex-spread">
              <div className="icon-section collapsible-indicator">
                <h6>{this.state.comments}</h6>
                <FontAwesomeIcon icon={faUserEdit} />
              </div>
            </div>
            {this.props.edits.map(function(item) {
              return (
                <>
                  <Collapsible
                    comments={comments}
                    originalText={originalText}
                    collapsibleContent={item}
                    key={item.id}
                  ></Collapsible>
                </>
              );
            })}
          </>
        ) : null}
      </>
    );
  }
}
