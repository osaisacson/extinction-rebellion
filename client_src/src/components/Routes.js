import React, { Component } from "react";
import "../sass/main.scss";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

import Stories from "./Stories";
import Demands from "./Demands";
import AddAction from "./AddAction";
import AddStory from "./AddStory";
import AddDemand from "./AddDemand";
import EditDemand from "./EditDemand";

import DemandDetails from "./DemandDetails";
import Search from "./Search";

export default class Routes extends Component {
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
    this.getData();
  }

  getData() {
    axios
      .all([
        axios.get("http://localhost:3001/api/stories"),
        axios.get("http://localhost:3001/api/demands")
      ])
      .then(
        axios.spread((stories, demands) => {
          this.setState({
            stories: stories.data,
            demands: demands.data,
            isLoading: false
          });
        })
      )
      .catch(err => console.log("error in Routes.js:getData()", err));
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    const { isLoading, demands, stories, search } = this.state;

    //Return only demands which country name matches what's entered in the search field
    let filteredCards = demands.filter(card => {
      return card.country.indexOf(search) !== -1;
    });

    let xrFactions = stories.filter(story => {
      return story.country.indexOf(search) !== -1;
    });

    // Define subsets of main card set
    let sentCards = filteredCards.filter(card => card.isSent);
    let suggestedCards = filteredCards.filter(card => card.isBeingDefined);

    return (
      <main>
        {!isLoading ? (
          <>
            {/* Searchfield */}
            <Search search={search} updateSearch={this.updateSearch}></Search>
            <Switch>
              <Route
                exact
                path="/"
                component={Stories}
                stories={xrFactions}
                search={search}
              ></Route>
              <Route
                exact
                path="/demands"
                render={props => (
                  <Demands
                    {...props}
                    demands={sentCards}
                    search={search}
                    header="DEMANDS"
                    subheader="Active demands that have been sent to parliament. Sign the ones you support below and join actions to push them through ASAP."
                    backgroundColor="action-background-color"
                    eventKey="0"
                    isSent={true}
                  />
                )}
              ></Route>
              <Route exact path="/:id/add-action" component={AddAction}></Route>
              <Route exact path="/add-story" component={AddStory}></Route>
              <Route exact path="/add-demand" component={AddDemand}></Route>
              <Route
                exact
                path="/demands/edit/:id"
                component={EditDemand}
              ></Route>
              <Route
                exact
                path="/demands/:id"
                component={DemandDetails}
              ></Route>
              <Route
                exact
                path="/suggested"
                render={props => (
                  <Demands
                    {...props}
                    demands={suggestedCards}
                    search={search}
                    header="SUGGESTIONS"
                    subheader="Suggested demands. Collaboratively flesh them out here."
                    backgroundColor="tweak-background-color"
                    eventKey="1"
                    isSuggested={true}
                  />
                )}
              ></Route>
              {/* <Route exact path="/suggested/:id" component={SuggestedDetail}></Route> */}
            </Switch>
          </>
        ) : (
          <h3>Loading...</h3>
        )}
      </main>
    );
  }
}
