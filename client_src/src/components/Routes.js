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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmericanSignLanguageInterpreting } from "@fortawesome/free-solid-svg-icons";

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
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .all([
        axios.get(
          "https://extinction-rebellion.herokuapp.com/api/stories",
          {},
          axiosConfig
        ),
        axios.get(
          "https://extinction-rebellion.herokuapp.com/api/demands",
          {},
          axiosConfig
        )
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
                render={props => (
                  <Stories {...props} stories={xrFactions} search={search} />
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
                    header="DEMANDS"
                    subheader="Sign the ones you support below and join actions to push them through ASAP."
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
          <div className="loading-section">
            {" "}
            <div className="spinner">
              <FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} />
            </div>
          </div>
        )}
      </main>
    );
  }
}
