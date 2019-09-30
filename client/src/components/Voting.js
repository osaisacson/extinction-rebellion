import React from "react";

export class Voting extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="voting">
        <button className="countUp" onClick={this.increment}>
          <i className="fas fa-caret-up"></i>
        </button>
        <div>{this.state.score}</div>
        <button className="countDown" onClick={this.decrement}>
          <i className="fas fa-caret-down"></i>
        </button>
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
