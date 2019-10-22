import React, { Component } from 'react';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Comments extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      nrOfComments: this.props.nrOfComments
    };
  }

  render() {
    let originalText = this.state.originalText
      ? this.state.originalText
      : 'No text';
    const editedText = collapsible.edit ? collapsible.edit : 'No edit';

    return (
      <div className="flex-spread">
        <div className="icon-section collapsible-indicator">
          <h6>{this.state.comments}</h6>
          <FontAwesomeIcon icon={faUserEdit} />
        </div>
      </div>
    );
  }
}
