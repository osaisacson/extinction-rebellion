import React from 'react';
import './sass/main.scss';
import './dataset.js';

import AwesomeCard from './components/AwesomeCard';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: window.Dataset.cards
    };
    // To use the 'this' keyword, we need to bind it to our function
    // this.handleClick = this.handleClick.bind(this);
  }

  // const [show, setShow] = React.useState(true);
  render() {
    return (
      <div className="App">
        <header className="section">
          <img src={'/xr-logo.png'} className="logo" alt="logo" />
        </header>

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="XR">
            <div className="section">
              <h2>How it works</h2>

              <p>
                - Anyone can suggest a demand in the 'suggested' section. This
                is basically the seed for a petition.
              </p>
              <p>
                - If 500 people agree with your demand it moves to the
                'Discussed' section and its comments section gets unlocked.
              </p>
              <p>
                - The top comments get automatically accepted into the demand
                description when they reach 500 upvotes.
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
          </Tab>
          <Tab eventKey="active" title="Active">
            <AwesomeCard
              cardcontent={this.state.cards.filter(card => card.isActive)}
            />
          </Tab>
          <Tab eventKey="discussed" title="Discussed">
            <AwesomeCard
              cardcontent={this.state.cards.filter(card => card.isDiscussed)}
            />{' '}
          </Tab>
          <Tab eventKey="suggested" title="Suggested">
            <AwesomeCard
              cardcontent={this.state.cards.filter(card => card.isSuggested)}
            />{' '}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
