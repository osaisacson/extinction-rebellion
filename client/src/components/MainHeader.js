import React from "react";

export class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issue: this.props.issue,
      postedBy: this.props.postedBy
    };
  }

  render() {
    return (
      <div className="card-section small-card-header">
        <h6>{this.state.issue}</h6>
        <h6>{this.state.postedBy}</h6>
      </div>
    );
  }
}
export default MainHeader;
