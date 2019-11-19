import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import AccordionCards from "./components/AccordionCards";
import AddDemand from "./components/AddDemand";

import Search from "./components/Search";
import Stories from "./components/Stories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: window.Dataset.cards,
      stories: window.Dataset.stories,
      search: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
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
    let sentCards = filteredCards.filter(card => card.isSent);
    let suggestedCards = filteredCards.filter(card => card.isDiscussed);

    return (
      <div className="App" style={{ background: this.state.backgroundColor }}>
        <header className="section">
          <img src={"/xr-logo.png"} className="logo" alt="logo" />

          {/* Searchfield */}
          <Search
            search={this.state.search}
            updateSearch={this.updateSearch}
          ></Search>
        </header>

        <div className="story-section stories-background-color">
          <h2>RECENT ACTIONS</h2>
          <div className="stories">
            {xrFactions.map(story => {
              return <Stories storycontent={story} key={story.id}></Stories>;
            })}
          </div>
        </div>

        <Accordion>
          {/* isSent cards */}
          <AccordionCards
            search={this.state.search}
            header="DEMANDS"
            subheader="Active demands that have been sent to parliament. Sign the ones you support below and join actions to push them through ASAP."
            backgroundColor="action-background-color"
            eventKey="0"
            cards={sentCards}
            isSent={true}
          ></AccordionCards>

          {/* isSuggested cards */}
          <AccordionCards
            search={this.state.search}
            header="NEW"
            subheader="Suggested demands. Collaboratively flesh them out here."
            backgroundColor="tweak-background-color"
            eventKey="1"
            cards={suggestedCards}
            isSuggested={true}
          ></AccordionCards>

          {/* Add new card */}
          <Card className="add-background-color">
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <h2>ADD +</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Accordion>
                  <AddDemand />
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default App;
