import React, { Component } from "react";
import axios from "axios";
import Story from "./Story";
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
      .get("https://extinction-rebellion.herokuapp.com/api/stories")
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
            height: "600",
            chrome: "nofooter"
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
            height: "600",
            chrome: "nofooter"
          }}
        />
      );
    }

    return (
      <>
        <div className="story-section stories-background-color">
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
                  img={story.img}
                ></Story>
              );
            })}
          </div>
        </div>
        <div className="centerContent">
          <div className="selfCenter standardWidth twitterFeed">
            {twitterFeed}
          </div>
        </div>
      </>
    );
  }
}
