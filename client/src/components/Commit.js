import React, { Component } from "react";
import Voting from "./Voting";

export default class Commit extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      comments: this.props.comments,
      originalText: this.props.originalText,
      isDiscussed: this.props.isDiscussed,
      commits: this.props.commits
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  componentDidUpdate() {
    // this.props.onToggle(this.props.index);
  }

  render() {
    let commits = this.state.commits;

    let originalText = this.state.originalText
      ? this.state.originalText
      : "No text";
    const editedText = commits.edit ? commits.edit : "No edit";

    let filteredCommits = commits
      ? commits.filter(commit => commit.section === "Summary")
      : [];

    // function findDiff(str1, str2) {
    //   let diff = "";
    //   str2.split("").forEach(function(val, i) {
    //     if (val != str1.charAt(i)) diff += val;
    //   });
    //   return diff;
    // }

    // let diff = findDiff(originalText, editedText);

    // console.log("difference", diff);

    // let firstOccurrence = editedText.indexOf(originalText);

    // if (firstOccurrence === -1) {
    //   alert("Search string not found");
    // } else {
    //   var stringALength = originalText.length;
    //   var newString;

    //   if (firstOccurrence === 0) {
    //     newString = editedText.substring(stringALength);
    //   } else {
    //     newString = editedText.substring(0, firstOccurrence);
    //     newString += editedText.substring(firstOccurrence + stringALength);
    //   }

    //   console.log("new string", newString);
    // }

    return (
      <>
        {this.state.isDiscussed ? (
          <>
            {this.props.commits.map(function(commit) {
              return (
                <>
                  <div className="collapsible-in-card">
                    <div
                      onClick={e => this.togglePanel(e)}
                      className="collapsible-trigger"
                    >
                      <div className="edit">
                        <div className="tight-header">
                          <p className="bold margin-bottom-10px">
                            "{commit.title}"
                          </p>
                          <div className="flex-spread">
                            <p>{commit.name ? commit.name : "No name"}</p>
                            <p>{commit.date ? commit.date : "No date"}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {this.state.open ? (
                      <div className="collapsible-content">
                        <div className="separator"></div>
                        <div className="compare-commits">
                          <div className="edit-section">
                            <p className="bold">Original:</p>
                            <p>{originalText}</p>
                          </div>
                          <div className="edit-section">
                            <p className="bold">Edit:</p>
                            <p className="changes">{editedText}</p>
                          </div>
                        </div>{" "}
                        <div className="separator"></div>
                        <Voting votes={commit.votes} />
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
          </>
        ) : null}
      </>
    );
  }
}
