import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class AddDemand extends Component {
  addDemand(newDemand) {
    axios
      .request({
        method: "post",
        url: "https://extinction-rebellion.herokuapp.com/api/demands",
        data: newDemand
      })
      .then(response => {
        window.location.reload();
        this.props.history.push("/");
        console.log(response);
      })
      .catch(err => console.log("Error from AddDemand.js:addDemand", err));
  }

  onSubmit(e) {
    const newDemand = {
      isBeingDefined: true,
      title: this.refs.title.value || "No title yet",
      city: this.refs.city.value || "No city yet",
      country: this.refs.country.value || "No country yet",
      summary: this.refs.summary.value || "No summary yet",
      background: this.refs.background.value || "No background yet",
      indicators: this.refs.indicators.value || "No indicators yet",
      representative: this.refs.representative.value || "No representative yet",
      representativeEmail:
        this.refs.representativeEmail.value ||
        "No email for the representative yet"
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
        <div className="add-demand">
          <h6>
            It doesn't have to be perfect, we can make it great together later.
          </h6>
          <br></br>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="title"
                ref="title"
                placeholder="Title"
              />
              <label htmlFor="title"></label>
              <input
                className="form-control"
                type="text"
                name="city"
                ref="city"
                placeholder="City"
              />
              <label htmlFor="city"></label>
              <input
                className="form-control"
                type="text"
                name="country"
                ref="country"
                placeholder="Country"
              />
              <label htmlFor="country"></label>

              <textarea
                className="form-control"
                rows="5"
                type="text"
                name="summary"
                ref="summary"
                placeholder="Summary"
              />
              <label htmlFor="summary"></label>

              <textarea
                className="form-control"
                rows="4"
                type="text"
                name="background"
                ref="background"
                placeholder="Background"
              />
              <label htmlFor="background"></label>

              <textarea
                className="form-control"
                rows="3"
                type="text"
                name="indicators"
                ref="indicators"
                placeholder="Indicators"
              />
              <label htmlFor="indicators"></label>
              <h6>
                <span className="bold">Representative</span> to eventually send
                the demand to. This should be the person who has the authority
                to raise this issue in parliament.
                <br></br>If you don't know, leave it blank for now.
              </h6>
              <br></br>

              <input
                className="form-control"
                type="text"
                name="representative"
                ref="representative"
                placeholder="Name of representative"
              />
              <label htmlFor="representative"></label>

              <input
                className="form-control"
                type="email"
                name="representativeEmail"
                ref="representativeEmail"
                placeholder="Email of representative"
              />
              <label htmlFor="representativeEmail"></label>
            </div>

            {/* <br></br>
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
            </p> */}
            <input
              className="form-input tweak-background-color btn float-right"
              type="submit"
              value="Add new demand"
            />
          </form>
          <br></br>
          <br></br>
        </div>
      </>
    );
  }
}
