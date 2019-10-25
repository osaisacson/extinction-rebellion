import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Demands from "./components/Demands";
import Demand from "./components/Demand";
import Description from "./components/DemandComponents/Description";
import Header from "./components/DemandComponents/Header";
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

        <Accordion>
          <Card className="action-background-color">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h2>ACT NOW ({nrRebelCards})</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {" "}
                <Accordion>
                  {rebelCards.map(card => {
                    return (
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={card.id}>
                          <Demand cardcontent={card}></Demand>
                        </Accordion.Toggle>

                        {/* Opened collapsible with full demand details */}
                        <Accordion.Collapse eventKey={card.id}>
                          <Card.Body>
                            <div className="separator"></div>
                            <Header
                              issue={card.issue}
                              postedBy={card.postedBy}
                              representative={card.representative}
                              timeSent={card.timeSent}
                            />
                            <div className="separator"></div>
                            <Description cardcontent={card} />
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    );
                  })}
                </Accordion>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="demand-background-color">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h2>DEMANDS ({nrActiveCards + nrSuggestedCards})</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                <Demands
                  activeCards={activeCards}
                  suggestedCards={suggestedCards}
                  nrActiveCards={nrActiveCards}
                  nrSuggestedCards={nrSuggestedCards}
                ></Demands>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default App;
