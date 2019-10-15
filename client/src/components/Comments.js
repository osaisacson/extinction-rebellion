import React from 'react';

export class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    };
  }

  render() {
    return (
      <div className="icon-section">
        <button className="fa-icons commentIcon">
          <i className="fas fa-comment"></i>
        </button>
        <h6>{this.state.comments}</h6>
      </div>
    );
  }
}
export default Comments;
