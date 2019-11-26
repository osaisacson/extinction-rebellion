import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMale,
  faPenFancy,
  faCaretUp,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon className="btn-icon" icon={faMale} />
            </button>
          </div>
        ) : this.props.isSent ? (
          <div className="icon-section">
            <h6>{this.state.score}</h6>
            <FontAwesomeIcon
              className="btn-icon"
              icon={faPenFancy}
              onClick={this.increment}
            />
          </div>
        ) : (
          <div className="icon-section">
            <FontAwesomeIcon
              className="btn-icon"
              icon={faCaretUp}
              onClick={this.increment}
            />
            <h6>{this.state.score}</h6>
            <FontAwesomeIcon
              className="btn-icon"
              icon={faCaretDown}
              onClick={this.decrement}
            />
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
