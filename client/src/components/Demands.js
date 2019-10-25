import React, { Component } from "react";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Demand from "./Demand";
import Description from "./DemandComponents/Description";
import Header from "./DemandComponents/Header";
import Voting from "./Voting";

export default class Demands extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCards: this.props.activeCards,
      suggestedCards: this.props.suggestedCards,
      nrActiveCards: this.props.nrActiveCards,
      nrSuggestedCards: this.props.nrSuggestedCards
    };
  }

  render() {
    return (
      <>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          {/* Tab of active demands */}
          <Tab
            eventKey="active-demands"
            title={`Active (${this.state.nrActiveCards})`}
          >
            <Accordion>
              {this.state.activeCards.map(card => {
                return (
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={card.id}>
                      <Demand cardcontent={card}></Demand>
                    </Accordion.Toggle>

                    {/* Opened collapsible with full demand details */}
                    <Accordion.Collapse eventKey={card.id}>
                      <Card.Body>
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
          </Tab>

          {/* Tab of demands still being defined */}
          <Tab
            eventKey="being-defined"
            title={`Being Defined (${this.state.nrSuggestedCards})`}
          >
            <Accordion>
              {this.state.suggestedCards.map(card => {
                return (
                  <Card>
                    <div className="large-icon">
                      <Voting votes={card.votes} />
                    </div>
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
          </Tab>
        </Tabs>
      </>
    );
  }

  //   <Accordion>

  //   <div className="section">
  //     <h6 className="bold">Active ({nrActiveCards})</h6>
  //   </div>
  //   {activeCards.map(card => {
  //     return <Demand cardcontent={card} key={card.id}></Demand>;
  //   })}
  //   <br></br>
  //   <div className="section tight-header">
  //     <h6 className="bold">Being defined ({nrSuggestedCards})</h6>

  //     <p>These suggested demands are works in progress.</p>
  //     <p>
  //       Defining a petition is intensive stuff, so lets help eachother
  //       with the heavy lifting.
  //     </p>
  //     <p>
  //       To become an accepted demand the petition needs to have all
  //       parts defined, and be as clear, measurable and corraborated as
  //       possible.
  //     </p>
  //   </div>
  //   {suggestedCards.map(card => {
  //     return <Demand cardcontent={card} cardkey={card.id}></Demand>;
  //   })}
  // </Accordion>

  // handleDemandClick() {
  //   this.setState({
  //     content: (
  //       <>
  //         {/* Header with general info */}
  //         <Header
  //           issue={this.state.cardcontent.issue}
  //           postedBy={this.state.cardcontent.postedBy}
  //           representative={this.state.cardcontent.representative}
  //           timeSent={this.state.cardcontent.timeSent}
  //         />
  //         <div className="separator"></div>
  //         <Description cardcontent={this.state.cardcontent} />
  //       </>
  //     )
  //   });
  // }

  // handleRebelClick() {
  //   this.setState({
  //     content: "Information on where and when to rebel."
  //   });
  // }
}
