import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised, faPenFancy } from '@fortawesome/free-solid-svg-icons';

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
      <div className="voting-section">
        {this.props.showAsRebel ? (
          <div className="icon-section">
            <button className="fa-icons" onClick={this.increment}>
              <h6>{this.state.score}</h6>
              <FontAwesomeIcon className="small-icon" icon={faFistRaised} />
            </button>
          </div>
        ) : this.props.isSent ? (
          <div className="icon-section sign">
            <h6>{this.state.score}</h6>
            <FontAwesomeIcon icon={faPenFancy} onClick={this.increment} />
          </div>
        ) : (
          <div className="icon-section">
            <button className="fa-icons countUp" onClick={this.increment}>
              <i className="fas fa-caret-up"></i>
            </button>
            <h6>{this.state.score}</h6>
            <button className="fa-icons countDown" onClick={this.decrement}>
              <i className="fas fa-caret-down"></i>
            </button>
          </div>
        )}
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
