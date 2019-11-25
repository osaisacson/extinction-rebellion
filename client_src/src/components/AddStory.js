import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddStory extends Component {
  addStory(newStory) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3001/api/stories",
        data: newStory
      })
      .then(response => {
        this.props.history.push("/");
        console.log(response);
      })
      .catch(err => console.log("Error from StoriesAdd.js:addStory", err));
  }

  onSubmit(e) {
    const newStory = {
      city: this.refs.city.value,
      country: this.refs.country.value,
      twitterHandle: this.refs.twitter.value
    };
    this.addStory(newStory);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Link className="btn grey" to="/">
          Back
        </Link>
        <Card className="add-story">
          <h6>Add a new XR faction.</h6>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="flex-spread">
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="city"
                  ref="city"
                  placeholder="City"
                />
                <label htmlFor="city"></label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="country"
                  ref="country"
                  placeholder="Country"
                />
                <label htmlFor="country"></label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="twitter"
                ref="twitter"
                placeholder="Twitter Handle"
              />
              <label htmlFor="twitter"></label>
            </div>
            <input
              className="form-input tweak-background-color btn float-right"
              type="submit"
              value="Add new XR faction"
            />
          </form>
          <br></br>
        </Card>
      </>
    );
  }
}
