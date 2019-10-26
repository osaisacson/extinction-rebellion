import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import AccordionCards from "./components/AccordionCards";
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

    // Define subsets of main card set
    let activeCards = filteredCards.filter(card => card.isActive);
    let suggestedCards = filteredCards.filter(card => card.isDiscussed);
    let rebelCards = filteredCards.filter(card => card.isRebel);

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

        <Accordion>
          {/* isRebel cards */}
          <AccordionCards
            header="DENIED"
            subheader="Our demands that have been denied in parliament. Find how to protest against this here."
            backgroundColor="action-background-color"
            eventKey="0"
            cards={rebelCards}
            isRebel={true}
          ></AccordionCards>

          {/* isActive cards */}
          <AccordionCards
            header="DEFINED"
            subheader="Demands that have been defined. Vote on their priority and get engaged in campaigns to push them through ASAP."
            backgroundColor="demand-background-color"
            eventKey="1"
            cards={activeCards}
            isActive={true}
          ></AccordionCards>

          {/* isSuggested cards */}
          <AccordionCards
            header="DEFINE"
            subheader="Suggested demands. Get involved and flesh these out here."
            backgroundColor="tweak-background-color"
            eventKey="2"
            cards={suggestedCards}
            isSuggested={true}
          ></AccordionCards>
        </Accordion>

        {/* Add new card */}
        <Card className="add-background-color">
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h2>ADD +</h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Accordion>
                <h4>Functionality to add a new demand goes here</h4>
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}

export default App;
