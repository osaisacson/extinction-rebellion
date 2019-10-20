import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CardItem from "./components/CardItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: window.Dataset.cards,
      search: ""
    };
    // To use the 'this' keyword, we need to bind it to our function
    // this.updateByCountry = this.updateByCountry.bind(this);
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

    let activeCards = filteredCards.filter(card => card.isActive);
    let nrActiveCards = activeCards.length;
    let suggestedCards = filteredCards.filter(card => card.isDiscussed);
    let nrSuggestedCards = suggestedCards.length;
    let rebelCards = filteredCards.filter(card => card.isRebel);

    return (
      <div className="App">
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

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="XR">
            <div className="section">
              <h2>How it works</h2>

              <p>
                - Anyone can suggest a demand in the 'Suggested' section. This
                is the seed for a petition.
              </p>
              <p>
                - Once the discussion has 10,000 upvotes and is marked as
                'complete' it gets sent as a petition to the relevant
                representative. Then the demand moves to the 'active' section.
              </p>
              <p>
                - In 'Active' we can see where the demand is at, and what you
                can do to push it forward.
              </p>
              <p>
                - If a demand gets stuck, you'll find here how and where you can
                rebel.
              </p>
            </div>

            <Accordion>
              {rebelCards.map(card => {
                return <CardItem cardcontent={card} key={card.id}></CardItem>;
              })}
            </Accordion>
          </Tab>
          <Tab eventKey="active" title={`Demands (${nrActiveCards})`}>
            <Accordion>
              {activeCards.map(card => {
                return <CardItem cardcontent={card} key={card.id}></CardItem>;
              })}
            </Accordion>
          </Tab>
          <Tab
            eventKey="suggested"
            title={`Being defined (${nrSuggestedCards})`}
          >
            <Accordion>
              {suggestedCards.map(card => {
                return <CardItem cardcontent={card} key={card.id}></CardItem>;
              })}
            </Accordion>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
