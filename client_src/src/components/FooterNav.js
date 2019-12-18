import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFistRaised,
  faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";

export default class FooterNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeActive: "currently-active",
      demandsActive: ""
    };

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleDemandsClick = this.handleDemandsClick.bind(this);
  }

  render() {
    return (
      <>
        <div className="footer-nav">
          <div
            className={`icon-nav ${this.state.homeActive}`}
            onClick={this.handleHomeClick}
          >
            <Link to="/">
              <FontAwesomeIcon icon={faSkullCrossbones} />
            </Link>
            <h6>Actions</h6>
          </div>
          <div
            className={`icon-nav ${this.state.demandsActive}`}
            onClick={this.handleDemandsClick}
          >
            <Link to="/suggested">
              <FontAwesomeIcon icon={faFistRaised} />
            </Link>
            <h6>Demands</h6>
          </div>
        </div>
      </>
    );
  }

  handleHomeClick() {
    this.setState({
      homeActive: "currently-active",
      demandsActive: ""
    });
  }

  handleDemandsClick() {
    this.setState({
      homeActive: "",
      demandsActive: "currently-active"
    });
  }
}
