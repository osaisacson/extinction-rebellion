import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faPlus,
  faSkullCrossbones,
  faHandPointer
} from "@fortawesome/free-solid-svg-icons";

export default class FooterNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionsActive: "",
      homeActive: "currently-active",
      demandsActive: ""
    };

    this.handleActionsClick = this.handleActionsClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleDemandsClick = this.handleDemandsClick.bind(this);
  }

  render() {
    return (
      <>
        <div className="footer-nav">
          <div
            className={`icon-nav ${this.state.demandsActive}`}
            onClick={this.handleDemandsClick}
          >
            <Link to="/suggested">
              <FontAwesomeIcon icon={faHandPointer} />
            </Link>
            <h6>Suggestions</h6>
          </div>
          <div
            className={`icon-nav ${this.state.homeActive}`}
            onClick={this.handleHomeClick}
          >
            <Link to="/">
              <FontAwesomeIcon icon={faSkullCrossbones} />
            </Link>
            <h6>What's up</h6>
          </div>
          <div
            className={`icon-nav ${this.state.actionsActive}`}
            onClick={this.handleActionsClick}
          >
            <Link to="/demands">
              <FontAwesomeIcon icon={faFistRaised} />
            </Link>
            <h6>Demands</h6>
          </div>
        </div>
        <div className="add-nav">
          <Link to="/add-demand">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
      </>
    );
  }

  handleActionsClick() {
    this.setState({
      actionsActive: "currently-active",
      homeActive: "",
      demandsActive: ""
    });
  }

  handleHomeClick() {
    this.setState({
      actionsActive: "",
      homeActive: "currently-active",
      demandsActive: ""
    });
  }

  handleDemandsClick() {
    this.setState({
      actionsActive: "",
      homeActive: "",
      demandsActive: "currently-active"
    });
  }
}
