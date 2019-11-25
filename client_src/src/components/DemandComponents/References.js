import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class References extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="centerContent">
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
            sourceType="url"
            url={`https://twitter.com/xr102references`}
            options={{ height: 400 }}
          />
          {/* Once Twitter '@${this.props.hashtag}references' exists and IFTT has been set up for automatically pulling in all #${this.props.hashtag} tweets: */}
          {/* <TwitterTimelineEmbed
            sourceType="url"
            url={`https://twitter.com/${this.props.hashtag}references`}
            options={{ height: 400 }} */}
          {/* /> */}
        </div>
      </div>
      //Alternative approach, pulls in tweets with petitionId hashtag without IFTTT workaround but does not work on iOS:
      // <iframe
      //   title="twubs"
      //   src={`http://twubs.com/embed/${this.props.hashtag}/?messagesPerPage=5&headerBgColor=%23000000&headerTextColor=%23ffffff`}
      //   width="350"
      //   height="350"
      //   frameBorder="0"
      // >
      //   <a href={`http://twubs.com/${this.props.hashtag}`}>
      //     #{this.props.hashtag}
      //   </a>
      // </iframe>
    );
  }
}
