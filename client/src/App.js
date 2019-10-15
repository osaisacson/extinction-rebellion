import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import AwesomeCard from "./components/AwesomeCard";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: window.Dataset.active,
      discussed: window.Dataset.discussed,
      suggested: window.Dataset.suggested
    };
    // To use the 'this' keyword, we need to bind it to our function
    // this.handleClick = this.handleClick.bind(this);
  }

  // const [show, setShow] = React.useState(true);
  render() {
    return (
      <div className="App">
        <header className="section">
          <img src={"/xr-logo.png"} className="logo" alt="logo" />
        </header>

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="XR">
            <div className="section">
              <h2>How it works</h2>
              <p>
                Since nobody has time for long and tedious discussions, the
                collaborative demand system instead works like this
              </p>
              <br></br>
              <p>
                - Anyone can suggest a demand, these end up in the bottom
                'suggested' section
              </p>
              <p>
                - If 1000 people agree with your demand, it moves to the
                'Discussed' section
              </p>
              <p>
                - Once in 'Discussed' the options for adding suggested
                improvements to your demand are open
              </p>
              <p>
                - If 20 people agree with a suggested change then that change is
                accepted to the demand description
              </p>
              <p>
                - Once the demand definition is completed and has 10,000 upvotes
                it gets sent as a petition to the representative who can make
                the next move, and the demand moves to the 'active' section.
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
            <AwesomeCard cardcontent={this.state.active} />
          </Tab>
          <Tab eventKey="discussed" title="Discussed">
            Discussed
            <AwesomeCard cardcontent={this.state.discussed} />
          </Tab>
          <Tab eventKey="suggested" title="Suggested">
            Suggested
            <AwesomeCard cardcontent={this.state.suggested} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
