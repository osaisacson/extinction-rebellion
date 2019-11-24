import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default class Tweetur extends Component {
  render() {
    return (
      <div className="centerContent">
        <div className="selfCenter standardWidth">
          <TwitterTimelineEmbed
            sourceType="url"
            url={`https://twitter.com/XRBerlin`}
            options={{ height: 400 }}
          />
        </div>
      </div>
    );
  }
}
