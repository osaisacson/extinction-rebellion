import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";
// import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Timeline } from "react-twitter-widgets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class Stories extends Component {
  constructor() {
    super();
    this.state = {
      twitterHandle: "",
      isLoading: true,
      stories: []
    };
    this.updateTwitter = this.updateTwitter.bind(this);
  }

  componentDidMount() {
    this.getStories();
  }

  getStories() {
    axios
      .get("http://localhost:3001/api/stories")
      .then(response => {
        let sortedStories = response.data.sort((a, b) =>
          b.city.localeCompare(a.city)
        );

        this.setState({
          stories: sortedStories,
          isLoading: false
        });
      })
      .catch(err => console.log("error in Stories.js:getStories()", err));
  }

  // Update twitterfeed to the profile belonging to the clicked story
  updateTwitter(handle) {
    this.setState({ twitterHandle: handle });
  }

  render() {
    const handle = this.state.twitterHandle;
    let twitterFeed;

    if (handle) {
      twitterFeed = (
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: handle
          }}
          options={{
            username: handle,
            height: "400"
          }}
        />
      );
    } else {
      twitterFeed = (
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "ExtinctionR"
          }}
          options={{
            username: "ExtinctionR",
            height: "400"
          }}
        />
      );
    }

    return (
      <>
        <div className="story-section stories-background-color">
          <h2>FACTION ACTIONS</h2>
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
                  twitterHandle={story.twitterHandle}
                  onClick={this.updateTwitter}
                  city={story.city}
                  country={story.country}
                ></Story>
              );
            })}
          </div>
        </div>
        <div className="centerContent">
          <div className="selfCenter standardWidth">{twitterFeed}</div>
        </div>
      </>
    );
  }
}
