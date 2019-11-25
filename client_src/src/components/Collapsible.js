import React, { Component } from 'react';

export default class Collapsible extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      header: this.props.header,
      content: this.props.content
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
    let content = this.state.content ? this.state.content : 'No Content';

    return (
      <div className="collapsible-in-card">
        <div onClick={e => this.togglePanel(e)} className="collapsible-trigger">
          <div className="edit">
            <div>{this.state.header}</div>
          </div>
        </div>

        {this.state.open ? (
          <div className="collapsible-content">{content}</div>
        ) : null}
      </div>
    );
  }
}
