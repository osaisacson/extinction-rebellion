import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddAction extends Component {
  addAction(newAction) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3001/api/actions",
        data: newAction
      })
      .then(response => {
        this.props.history.push("/");
        console.log(response);
      })
      .catch(err => console.log("Error from AddAction.js:addAction", err));
  }

  onSubmit(e) {
    const newAction = {
      demandId: this.props.demandId,
      date: this.refs.date.value,
      time: this.refs.time.value,
      details: this.refs.details.value,
      contactKey: this.refs.contactKey.value
    };
    this.addAction(newAction);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Link className="btn grey" to="/">
          Back
        </Link>
        <Card className="add-story">
          <h6>
            Add a new action for this demand. It could be a meeting, a protest,
            an event. Anything you think will push it forward
          </h6>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="flex-spread">
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="date"
                  ref="date"
                  placeholder="Date of action"
                />
                <label htmlFor="date"></label>
              </div>
              <div className="form-group">
                <input type="text" name="time" ref="time" placeholder="time" />
                <label htmlFor="time"></label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="details"
                ref="details"
                placeholder="Any necessary details, but use the Telegram group below for logistics"
              />
              <label htmlFor="details"></label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="contactKey"
                ref="contactKey"
                placeholder="Telegram group name"
              />
              <label htmlFor="contactKey"></label>
            </div>
            <input
              className="form-input tweak-background-color btn float-right"
              type="submit"
              value="Add new action"
            />
          </form>
          <br></br>
        </Card>
      </>
    );
  }
}
