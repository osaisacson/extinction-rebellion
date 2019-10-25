import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Demands from "./components/Demands";
import Demand from "./components/Demand";
import Stories from "./components/Stories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: window.Dataset.cards,
      stories: window.Dataset.stories,
      search: ""
    };
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20)
    });
  }

  render() {
    //Return only cards which country name matches what's entered in the search field
    let filteredCards = this.state.cards.filter(card => {
      return card.country.indexOf(this.state.search) !== -1;
    });

    let xrFactions = this.state.stories.filter(story => {
      return story.country.indexOf(this.state.search) !== -1;
    });

    let activeCards = filteredCards.filter(card => card.isActive);
    let suggestedCards = filteredCards.filter(card => card.isDiscussed);
    let rebelCards = filteredCards.filter(card => card.isRebel);
    let nrActiveCards = activeCards.length;
    let nrSuggestedCards = suggestedCards.length;
    let nrRebelCards = rebelCards.length;

    return (
      <div className="App" style={{ background: this.state.backgroundColor }}>
        <header className="section">
          <img src={"/xr-logo.png"} className="logo" alt="logo" />
          <input
            className="search-filter"
            type="text"
            placeholder="Choose Country"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          ></input>
        </header>

        <div className="stories">
          {xrFactions.map(story => {
            return <Stories storycontent={story} key={story.id}></Stories>;
          })}
        </div>

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title={`ACT NOW (${nrRebelCards})`}>
            <Accordion>
              {rebelCards.map(card => {
                return <Demand cardcontent={card} key={card.id}></Demand>;
              })}
            </Accordion>
          </Tab>
          <Tab
            eventKey="active"
            title={`DEMANDS (${nrActiveCards + nrSuggestedCards})`}
          >
            <Demands
              activeCards={activeCards}
              suggestedCards={suggestedCards}
              nrActiveCards={nrActiveCards}
              nrSuggestedCards={nrSuggestedCards}
            ></Demands>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
