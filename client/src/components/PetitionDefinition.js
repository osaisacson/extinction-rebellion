import React, { Component } from "react";
import Commits from "./Commits";

export default class PetitionDefinition extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      cardcontent: this.props.cardcontent
    };
  }

  render() {
    let cardCommits = this.state.cardcontent.commits;
    let summaryCommits = cardCommits
      ? cardCommits.filter(commit => commit.section === "Summary")
      : [];
    let backgroundCommits = cardCommits
      ? cardCommits.filter(commit => commit.section === "Background")
      : [];
    let regionCommits = cardCommits
      ? cardCommits.filter(commit => commit.section === "Region")
      : [];
    let indicatorCommits = cardCommits
      ? cardCommits.filter(commit => commit.section === "Indicators")
      : [];

    return (
      <>
        <h6 className="bold">Summary</h6>
        <p>
          {this.state.cardcontent.summary
            ? this.state.cardcontent.summary
            : "TBD. Here goes a one paragraph summary of the purpose of the petition."}
        </p>
        <Commits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.summary}
          commits={summaryCommits ? summaryCommits : []}
        ></Commits>
        <div className="separator margin-bottom-10px"></div>

        <h6 className="bold">Background</h6>
        <p>
          {this.state.cardcontent.background
            ? this.state.cardcontent.background
            : "TBD. Define the reasons behind the petition."}
        </p>
        <Commits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.background}
          commits={backgroundCommits ? backgroundCommits : []}
          comments={backgroundCommits.length}
        ></Commits>
        <div className="separator margin-bottom-10px"></div>

        <h6 className="bold">Affected region</h6>
        <p>
          {this.state.cardcontent.affectedRegion
            ? this.state.cardcontent.affectedRegion
            : "TBD. Define the area that would be affected."}
        </p>
        <Commits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.region}
          commits={regionCommits ? regionCommits : []}
          comments={regionCommits.length}
        ></Commits>
        <div className="separator margin-bottom-10px"></div>

        <h6 className="bold">Success Indicators</h6>
        <p>
          {this.state.cardcontent.successIndicators
            ? this.state.cardcontent.successIndicators
            : "TBD. List relevant measurements that will be affected here."}
        </p>
        <Commits
          isDiscussed={this.state.cardcontent.isDiscussed}
          originalText={this.state.cardcontent.indicators}
          commits={indicatorCommits ? indicatorCommits : []}
          comments={indicatorCommits.length}
        ></Commits>
        <div className="separator margin-bottom-10px"></div>

        <br></br>
      </>
    );
  }
}
