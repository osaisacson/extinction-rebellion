import React, { Component } from "react";

import Voting from "./Voting";

export default class Collapsible extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      originalText: this.props.originalText
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
    let collapsible = this.props.collapsibleContent;

    let originalText = this.state.originalText
      ? this.state.originalText
      : "No text";
    const editedText = collapsible.edit ? collapsible.edit : "No edit";

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
      <div className="collapsible-in-card">
        <div onClick={e => this.togglePanel(e)} className="collapsible-trigger">
          <div className="edit">
            <div className="tight-header">
              <p className="bold margin-bottom-10px">"{collapsible.title}"</p>
              <div className="flex-spread">
                <p>{collapsible.name}</p>
                <p>{collapsible.date}</p>
              </div>
            </div>
          </div>
        </div>

        {this.state.open ? (
          <div className="collapsible-content">
            <div className="separator"></div>
            <div className="compare-edits">
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
            <Voting votes={collapsible.votes} />
          </div>
        ) : null}
      </div>
    );
  }
}
