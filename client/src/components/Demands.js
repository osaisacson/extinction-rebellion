import React, { Component } from "react";
import "../sass/main.scss";
import "../dataset.js";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import axios from "axios";

import AccordionCards from "./AccordionCards";

import Search from "./Search";
import Stories from "./Stories";

export default class Demands extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      demands: [],
      stories: [],
      search: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.getDemands();
    this.getStories();
  }

  getStories() {
    axios.get("http://localhost:3001/api/stories").then(response => {
      this.setState({ stories: response.data, isLoading: false });
    });
  }

  getDemands() {
    axios.get("http://localhost:3001/api/demands").then(response => {
      this.setState({ demands: response.data, isLoading: false });
    });
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     demands: window.Dataset.demands,
  //     stories: window.Dataset.stories,
  //     search: ""
  //   };

  //   this.updateSearch = this.updateSearch.bind(this);
  // }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    const { isLoading, demands } = this.state;

    //Return only demands which country name matches what's entered in the search field
    let filteredCards = demands.filter(card => {
      return card.country.indexOf(this.state.search) !== -1;
    });

    let xrFactions = this.state.stories.filter(story => {
      return story.country.indexOf(this.state.search) !== -1;
    });

    // Define subsets of main card set
    let sentCards = filteredCards.filter(card => card.isSent);
    let suggestedCards = filteredCards.filter(card => card.isBeingDefined);

    return (
      <div>
        {/* Searchfield */}
        <Search
          search={this.state.search}
          updateSearch={this.updateSearch}
        ></Search>

        {/* Here's our data check */}
        {!isLoading ? (
          <>
            <div className="story-section stories-background-color">
              <h2>RECENT ACTIONS</h2>
              <div className="stories">
                {xrFactions.map(story => {
                  return (
                    <Stories
                      key={story.id}
                      city={story.city}
                      country={story.country}
                    ></Stories>
                  );
                })}
              </div>
            </div>

            <Accordion>
              {/* isSent demands */}
              <div className="active-section">
                <AccordionCards
                  search={this.state.search}
                  header="DEMANDS"
                  subheader="Active demands that have been sent to parliament. Sign the ones you support below and join actions to push them through ASAP."
                  backgroundColor="action-background-color"
                  eventKey="0"
                  demands={sentCards}
                  isSent={true}
                ></AccordionCards>
              </div>

              {/* isSuggested demands */}
              <div className="define-section">
                <AccordionCards
                  search={this.state.search}
                  header="NEW"
                  subheader="Suggested demands. Collaboratively flesh them out here."
                  backgroundColor="tweak-background-color"
                  eventKey="1"
                  demands={suggestedCards}
                  isSuggested={true}
                ></AccordionCards>
              </div>

              {/* Add new card */}
              <div className="add-section">
                <Link className="add-section" to="/demand/add">
                  <div className="add-demand">
                    <h2>ADD +</h2>
                  </div>
                </Link>
              </div>
            </Accordion>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}
