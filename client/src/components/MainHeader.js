import React from "react";

export class MainHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: this.props.country,
      city: this.props.city,
      issue: this.props.issue,
      postedBy: this.props.postedBy
    };
  }

  render() {
    return (
      <div className="card-section small-card-header">
        <div>
          <h6>{this.state.issue}</h6>
          <h6>{this.state.postedBy}</h6>
        </div>
        <div>
          <h6>
            {this.state.city}, {this.state.country}
          </h6>
        </div>
      </div>
    );
  }
}
export default MainHeader;
