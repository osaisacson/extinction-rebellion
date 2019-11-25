import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";
import { Link } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
    axios
      .get("http://localhost:3001/api/stories")
      .then(response => {
        this.setState({
          stories: response.data,
          isLoading: false
        });
      })
      .catch(err => console.log("error in Stories.js:getStories()", err));
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
            <Link to="/add-story">
              <div className="add-button">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Link>
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
              options={{ height: 600 }}
            />
          </div>
        </div>
      </>
    );
  }
}
