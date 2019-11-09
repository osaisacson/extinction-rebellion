import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import AccordionCards from "./components/AccordionCards";
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
                  <h6>
                    Start a new demand. It does not have to be perfect, we can
                    make it great together afterwards.
                  </h6>

                  <form action="/" method="post">
                    <div className="form-group">
                      <label htmlFor="title"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Title"
                      />
                    </div>
                    <div className="flex-spread">
                      <div className="form-group">
                        <label htmlFor="city"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="country"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="summary"></label>
                      <input
                        type="textarea"
                        className="form-control"
                        id="summary"
                        placeholder="Summary"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="background"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="background"
                        placeholder="Background"
                      />
                    </div>
                    <br></br>
                    <h6>
                      <span className="bold">Representative</span> to send the
                      demand to once it has been defined and accepted by the
                      group. This should be the person who has the authority to
                      raise this issue in parliament. If you don't know who,
                      leave it blank for now.
                    </h6>
                    <div className="flex-spread">
                      <div className="form-group">
                        <label htmlFor="representativeName"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="representativeName"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="representativeEmail"></label>
                        <input
                          type="text"
                          className="form-control"
                          id="representativeEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <br></br>
                    <h6>One time linking setup:</h6>
                    <div className="list-group-item">
                      <input
                        type="checkbox"
                        style={{
                          height: 16,
                          width: 16
                        }}
                      />
                      <span>
                        Create a new account on Twitter called{" "}
                        <span className="bold">@xr110references</span>, after
                        this initial setup you will not need to touch it again.
                      </span>
                    </div>
                    <div className="list-group-item">
                      <input
                        type="checkbox"
                        style={{
                          height: 16,
                          width: 16
                        }}
                      />
                      <span>
                        Create an account at{" "}
                        <a className="bold" href="https://iftt.com">
                          IFTTT
                        </a>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <input
                        type="checkbox"
                        style={{
                          height: 16,
                          width: 16
                        }}
                      />
                      <span>
                        Setup autotweeting all Tweets with #xr110 through this{" "}
                        <a
                          className="bold"
                          href="https://ifttt.com/applets/SMvaxczG-if-hashtag-then-retweet-it"
                        >
                          IFTTT recipe.
                        </a>
                      </span>
                    </div>
                    <p>
                      Hurray! Now all Tweets anyone does with #xr110 gets
                      automatically pulled into the # section of your new
                      petition. You won't have to do anything.
                    </p>
                  </form>
                  <br></br>
                  <h5>Add new demand</h5>
                  <br></br>
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
