import React, { Component } from 'react';

export default class Description extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      header: this.props.section,
      text: this.props.text
    };
  }

  render() {
    return (
      <>
        <h6 className="bold">{this.state.header}</h6>
        <p>{this.state.text ? this.state.text : 'TBD'}</p>
      </>
    );
  }
}

{
  /* <Commits
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

        <br></br> */
}
