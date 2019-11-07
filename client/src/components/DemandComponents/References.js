import React, { Component } from "react";

export default class References extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <iframe
        title="twubs"
        src={`http://twubs.com/embed/${this.props.hashtag}/?messagesPerPage=5&headerBgColor=%23000000&headerTextColor=%23ffffff`}
        width="350"
        height="350"
        frameBorder="0"
      >
        <a href={`http://twubs.com/${this.props.hashtag}`}>
          #{this.props.hashtag}
        </a>
      </iframe>
    );
  }
}
