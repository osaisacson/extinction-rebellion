import React, { Component } from "react";
import axios from "axios";

export default class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      img: ""
    };

    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.getImage(this.props.city);
  }

  getImage(city) {
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
        this.setState({
          img: response.data.results[0].urls.small,
          isLoading: false
        });
      });
  }

  render() {
    console.log("this.props.passToParent from child:", this.props.passToParent);

    return (
      <div className="story" onClick={this.props.passToParent}>
        <div className="mask">
          <img
            src={
              this.state.img
                ? this.state.img
                : "https://images.unsplash.com/photo-1571238052771-c6e35627d337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=190&q=80"
            }
            alt="img"
          ></img>
        </div>
        <h5>{this.props.city}</h5>
        <h5>{this.props.country}</h5>
      </div>
    );
  }
}
