import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

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
    let nrActiveCards = activeCards.length;
    let suggestedCards = filteredCards.filter(card => card.isDiscussed);
    let nrSuggestedCards = suggestedCards.length;
    let rebelCards = filteredCards.filter(card => card.isRebel);
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
            <Accordion>
              <div className="section">
                <h6 className="bold">Active ({nrActiveCards})</h6>
              </div>
              {activeCards.map(card => {
                return <Demand cardcontent={card} key={card.id}></Demand>;
              })}
              <br></br>
              <div className="section tight-header">
                <h6 className="bold">Being defined ({nrSuggestedCards})</h6>

                <p>These suggested demands are works in progress.</p>
                <p>
                  Defining a petition is intensive stuff, so lets help eachother
                  with the heavy lifting.
                </p>
                <p>
                  To become an accepted demand the petition needs to have all
                  parts defined, and be as clear, measurable and corraborated as
                  possible.
                </p>
              </div>
              {suggestedCards.map(card => {
                return <Demand cardcontent={card} cardkey={card.id}></Demand>;
              })}
            </Accordion>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
