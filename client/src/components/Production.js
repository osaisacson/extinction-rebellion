import React, { Component } from "react";
import CountUp from "react-countup";
import AccordionInfo from "./../components/AccordionInfo";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export default class Production extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      production: window.Dataset.production
    };
  }

  render() {
    return (
      <Accordion>
        {this.state.production.map(function(item) {
          return (
            <Card key={item.id}>
              <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                <div className="accordion-custom-trigger-section">
                  <img src={item.icon} className="logos" alt="logo" />
                  <div className="accordion-custom-title-countup-section">
                    <div className="accordion-custom-title">{item.title}</div>
                    <div className="accordion-custom-countup">
                      <CountUp
                        start={item.thisYearStart}
                        end={item.thisYearEnd}
                        duration={item.thisYearDuration}
                        separator=" "
                        redraw
                      />
                      <span className="accordion-custom-title">
                        {" "}
                        {item.unit}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={item.id}>
                <Card.Body>
                  <AccordionInfo
                    unit={item.unit}
                    lastMonth={item.lastMonth}
                    thisMonthStart={item.thisMonthStart}
                    thisMonthEnd={item.thisMonthEnd}
                    thisMonthDuration={item.thisMonthDuration}
                    thisYearStart={item.thisYearStart}
                    thisYearEnd={item.thisYearEnd}
                    thisYearDuration={item.thisYearDuration}
                    quoteBefore={item.quoteBefore}
                    quoteStart={item.quoteStart}
                    quoteEnd={item.quoteEnd}
                    quoteDuration={item.quoteDuration}
                    quoteUnit={item.quoteUnit}
                    quoteAfter={item.quoteAfter}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}
