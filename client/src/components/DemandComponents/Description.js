import React, { Component } from 'react';

export default class Description extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.card.description.map(description => {
          return (
            <div key={description.id}>
              <p className="bold no-margin">{description.section}</p>
              <p>{description.text ? description.text : 'TBD'}</p>
              {/* {isDiscussed ? (
                <Edits edits={description.edits} originalText={originalText} />
              ) : null} */}
            </div>
          );
        })}
      </>
    );
  }
}
