import React from 'react';
import CountUp from 'react-countup';

export class Voting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: this.props.votes
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
        <h6>{this.state.score}</h6>
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
