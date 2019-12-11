import React from "react";
import axios from "axios";

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
      votes: this.props.votes
    };
  }

  editDemand(newVote) {
    axios
      .request({
        method: "patch",
        url: `https://extinction-rebellion.herokuapp.com/api/demands/${this.props.cardId}`,
        data: newVote
      })
      .then(response => {
        window.location.reload();
        this.props.history.push("/");
      })
      .catch(err => console.log("Error from Voting.js:editDemand", err));
  }

  upvote = () => {
    let newVote;
    if (this.props.voteLimit === this.state.votes - 1) {
      newVote = {
        isSent: true,
        isBeingDefined: false,
        votes: this.state.votes + 1
      };
    } else {
      newVote = {
        votes: this.state.votes + 1
      };
    }
    this.editDemand(newVote);
  };

  downvote = () => {
    const newVote = {
      votes: this.state.votes - 1
    };
    this.editDemand(newVote);
  };

  render() {
    return (
      <div className="voting-section">
        {this.props.showAsRebel ? (
          <div className="icon-section">
            <button className="fa-icons" onClick={this.upvote}>
              <h6>{this.state.votes}</h6>
              <FontAwesomeIcon className="btn-icon" icon={faMale} />
            </button>
          </div>
        ) : this.props.isSent ? (
          <div className="icon-section">
            <h6>{this.state.votes}</h6>
            <FontAwesomeIcon
              className="btn-icon"
              icon={faPenFancy}
              onClick={this.upvote}
            />
          </div>
        ) : (
          <div className="icon-section">
            <FontAwesomeIcon
              className="btn-icon"
              icon={faCaretUp}
              onClick={this.upvote}
            />
            <h6>{this.state.votes}</h6>
            <FontAwesomeIcon
              className="btn-icon"
              icon={faCaretDown}
              onClick={this.downvote}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Voting;
