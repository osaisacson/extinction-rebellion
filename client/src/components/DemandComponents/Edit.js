import React, { Component } from 'react';
import Voting from './../Voting';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      originalText: this.props.originalText,
      edit: this.props.edit
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
        <div className="separator"></div>
        <div
          key={this.state.edit.id}
          className="collapsible-in-card main-border-color card-padding"
        >
          <Voting votes={this.state.edit.votes} acceptedVoteNumber={100} />
          <div
            onClick={e => this.togglePanel(e)}
            className="collapsible-trigger"
          >
            <div className="edit flex-spread">
              <div className="tight-header">
                <p className="grey-color">
                  {this.state.edit.date ? this.state.edit.date : 'No date'}
                </p>
                <p className="bold margin-bottom-10px">
                  "{this.state.edit.title}"
                </p>
                <p>{this.state.edit.name ? this.state.edit.name : 'No name'}</p>
              </div>
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
                  <p className="changes">{this.state.edit.edit}</p>
                </div>
              </div>{' '}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}
