import React from "react";
import CountUp from "react-countup";

class AccordionInfo extends React.Component {
  render() {
    return (
      <div>
        <h5 className="accordion-info">
          <div className="tid">Förra månaden:</div>{" "}
          <div className="nr">
            {this.props.lastMonth} {this.props.unit}
          </div>
        </h5>
        <h5 className="accordion-info">
          <div className="tid">Denna månaden:</div>{" "}
          <div className="nr">
            <CountUp
              start={this.props.thisMonthStart}
              end={this.props.thisMonthEnd}
              delay={1}
              duration={this.props.thisMonthDuration}
              separator=" "
              redraw
            />{" "}
            {this.props.unit}
          </div>
        </h5>
        <h5 className="accordion-info">
          <div className="tid">Detta året:</div>{" "}
          <div className="nr">
            <CountUp
              start={this.props.thisYearStart}
              end={this.props.thisYearEnd}
              delay={1}
              duration={this.props.thisYearDuration}
              separator=" "
              redraw
            />{" "}
            {this.props.unit}
          </div>
        </h5>
        <br></br>
        <br></br>
        <blockquote className="blockquote mb-0 card-body">
          <div>
            {this.props.quoteBefore}{" "}
            <strong>
              <CountUp
                start={this.props.quoteStart}
                end={this.props.quoteEnd}
                delay={1}
                duration={this.props.quoteDuration}
                separator=" "
                redraw
              />{" "}
              {this.props.quoteUnit}
            </strong>
            {this.props.quoteAfter}.
          </div>
        </blockquote>
      </div>
    );
  }
}

export default AccordionInfo;
