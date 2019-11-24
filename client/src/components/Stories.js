import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";
import Tweetur from "./Tweetur";

export default class Stories extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      currentTwitterHandle: "",
      stories: [],
      search: ""
    };

    this.passCurrentTwitterHandle = this.passCurrentTwitterHandle.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.getStories();
  }

  getStories() {
    axios.get("http://localhost:3001/api/stories").then(response => {
      this.setState({
        stories: response.data,
        isLoading: false
      });
    });
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  passCurrentTwitterHandle(handle) {
    this.setState({
      currentTwitterHandle: handle
    });
  }

  render() {
    return (
      <>
        <div className="story-section stories-background-color">
          <h2>RECENT ACTIONS</h2>
          <div className="stories">
            {this.state.stories.map(story => {
              return (
                <Story
                  key={story.id}
                  city={story.city}
                  country={story.country}
                ></Story>
              );
            })}
          </div>
        </div>
        <Tweetur />
      </>
    );
  }
}
