import React from "react";

export class Voting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: this.props.votes,
      specialClass: this.props.specialClass,
      acceptedVoteNumber: this.props.acceptedVoteNumber
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="voting-section">
        <div className={`icon-section ${this.state.specialClass}`}>
          <button className="fa-icons countUp" onClick={this.increment}>
            <i className="fas fa-caret-up"></i>
          </button>
          <h6>{this.state.score}</h6>
          <button className="fa-icons countDown" onClick={this.decrement}>
            <i className="fas fa-caret-down"></i>
          </button>
        </div>
        {/* {this.state.acceptedVoteNumber ? (
          <div className="countdown">/{this.state.acceptedVoteNumber}</div>
        ) : null} */}
      </div>
    );
  }

  increment() {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrement() {
    this.setState({
      score: this.state.score - 1
    });
  }
}
export default Voting;
