import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Stories extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      currentTwitterHandle: "https://twitter.com/XR_Belgium",
      stories: [],
      search: ""
    };
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

  passTwitterHandleFromChild(handle) {
    console.log("handle passed to passTwitterHandleFromChild:", handle);
    this.setState({ currentTwitterHandle: handle });
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
                  passToParent={this.passTwitterHandleFromChild.bind(
                    this,
                    story.twitterHandle
                  )}
                  city={story.city}
                  country={story.country}
                ></Story>
              );
            })}
          </div>
        </div>
        <div className="centerContent">
          <div className="selfCenter standardWidth">
            <TwitterTimelineEmbed
              sourceType="url"
              url={`https://twitter.com/${this.state.currentTwitterHandle}`}
              options={{ height: 400 }}
            />
          </div>
        </div>
      </>
    );
  }
}
