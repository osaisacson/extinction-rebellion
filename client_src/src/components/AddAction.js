import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddAction extends Component {
  addAction(newAction) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3001/api/actions",
        data: newAction
      })
      .then(response => {
        this.props.history.push("/");
        console.log(response);
      })
      .catch(err => console.log("Error from AddAction.js:addAction", err));
  }

  onSubmit(e) {
    const newAction = {
      isBeingDefined: true,
      title: this.refs.title.value,
      city: this.refs.city.value,
      country: this.refs.country.value,
      summary: this.refs.summary.value,
      background: this.refs.background.value,
      indicators: this.refs.indicators.value,
      representative: this.refs.representative.value,
      representativeEmail: this.refs.representativeEmail.value
    };
    this.addDemand(newDemand);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <Link className="btn grey" to="/">
          Back
        </Link>
        <Card className="add-demand">
          <h6>
            Start a new demand. It does not have to be perfect, we can make it
            great together afterwards.
          </h6>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="title"
                ref="title"
                placeholder="Title"
              />
              <label htmlFor="title"></label>
            </div>
            <div className="flex-spread">
              <div className="form-group">
                <input
                  className="form-input"
                  type="text"
                  name="city"
                  ref="city"
                  placeholder="City"
                />
                <label htmlFor="city"></label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="country"
                  ref="country"
                  placeholder="Country"
                />
                <label htmlFor="country"></label>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="summary"
                ref="summary"
                placeholder="Summary"
              />
              <label htmlFor="summary"></label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="background"
                ref="background"
                placeholder="Background"
              />
              <label htmlFor="background"></label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="indicators"
                ref="indicators"
                placeholder="Indicators"
              />
              <label htmlFor="indicators"></label>
            </div>
            <br></br>
            <h6>
              <span className="bold">Representative</span> to send the demand to
              once it has been defined and accepted by the group. This should be
              the person who has the authority to raise this issue in
              parliament. If you don't know who, leave it blank for now.
            </h6>
            <div className="flex-spread">
              <div className="form-group">
                <input
                  type="text"
                  name="representative"
                  ref="representative"
                  placeholder="Rep name"
                />
                <label htmlFor="representative"></label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="representativeEmail"
                  ref="representativeEmail"
                  placeholder="Email"
                />
                <label htmlFor="representativeEmail"></label>
              </div>
            </div>

            <br></br>
            <h6>One time linking setup:</h6>
            <div className="list-group-item">
              <input
                type="checkbox"
                ref="createdTwitter"
                style={{
                  height: 16,
                  width: 16
                }}
              />
              <span>
                Create a new account on Twitter called{" "}
                <span className="bold">@xr110references</span>, after this
                initial setup you will not need to touch it again.
              </span>
            </div>
            <div className="list-group-item">
              <input
                type="checkbox"
                ref="createdIFTTT"
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
                ref="createdScript"
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
              Hurray! Now all Tweets anyone does with #xr110 gets automatically
              pulled into the # section of your new petition. You won't have to
              do anything.
            </p>
            <input
              className="form-input tweak-background-color btn float-right"
              type="submit"
              value="Add new demand"
            />
          </form>
          <br></br>
          <br></br>
        </Card>
      </>
    );
  }
}
