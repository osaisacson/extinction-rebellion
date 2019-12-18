import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddStory extends Component {
  addStory(newStory) {
    axios
      .request({
        method: "post",
        url: "https://extinction-rebellion.herokuapp.com/api/stories",
        data: newStory
      })
      .then(response => {
        this.props.history.push("/");
        console.log(response);
      })
      .catch(err => console.log("Error from AddStory.js:addStory", err));
  }

  onSubmit(e) {
    const newStory = {
      img: this.getImage(this.refs.city.value),
      city: this.refs.city.value,
      country: this.refs.country.value,
      twitterHandle: this.refs.twitter.value
    };
    this.addStory(newStory);
    e.preventDefault();
  }

  getImage(city) {
    console.log("getImage is being called, with the city: ", city);
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: city },
        page: 1,
        per_page: 1,
        headers: {
          Authorization:
            "Client-ID cb32c91579c47c9f70fd331095157ba5134b18d039ce6980b4403f3d8a9b6000"
        }
      })
      .then(response => {
        console.log("response.data", response.data);
        const fetchedPic = response.data.results[0].urls.small;
        const defaultPic =
          "https://images.unsplash.com/photo-1571238052771-c6e35627d337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=190&q=80";
        console.log("getImage returns: ");
        console.log(
          "response.data.results[0].urls.small ",
          response.data.results[0].urls.small
        );
        console.log("fetchedPic ", fetchedPic);
        console.log("defaultPic ", defaultPic);

        return fetchedPic ? fetchedPic : defaultPic;
      });
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
