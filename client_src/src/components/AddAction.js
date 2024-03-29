import React, { Component } from "react";
import axios from "axios";

export default class AddAction extends Component {
  addAction(newAction) {
    axios
      .request({
        method: "post",
        url: "https://extinction-rebellion.herokuapp.com/api/actions",
        data: newAction
      })
      .then(response => {
        alert("Saved!");
        window.location.reload();
      })
      .catch(err => console.log("Error from AddAction.js:addAction", err));
  }

  onSubmit(e) {
    const newAction = {
      demandId: this.props.demandId,
      date: this.refs.date.value,
      time: this.refs.time.value,
      name: this.refs.name.value,
      telegram: this.refs.telegram.value
    };
    console.log("newAction", newAction);

    this.addAction(newAction);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h6>
          Create new action. Handle all communication for this action via
          telegram, so start by{" "}
          <a href="https://blog.en.uptodown.com/how-to-create-groups-and-channels-telegram/">
            creating a group on telegram
          </a>{" "}
          and adding the name of it below.
        </h6>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="date"
              ref="date"
              placeholder="Date of action"
            />
            <label htmlFor="date"></label>

            <input
              className="form-control"
              type="text"
              name="time"
              ref="time"
              placeholder="time"
            />
            <label htmlFor="time"></label>

            <input
              className="form-control"
              type="text"
              name="name"
              ref="name"
              placeholder="Name of action"
            />
            <label htmlFor="name"></label>

            <input
              className="form-control"
              type="text"
              name="telegram"
              ref="telegram"
              placeholder="Telegram group name"
            />
            <label htmlFor="telegram"></label>
          </div>
          <input
            className="form-input tweak-background-color btn"
            type="submit"
            value="Add new action"
          />
        </form>
      </>
    );
  }
}
