import React, { Component } from 'react';

export default class AddDemand extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate() {
    // this.props.onToggle(this.props.index);
  }

  render() {
    return (
      <>
        <h6>
          Start a new demand. It does not have to be perfect, we can make it
          great together afterwards.
        </h6>

        <form action="/" method="post">
          <div className="form-group">
            <label htmlFor="title"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="flex-spread">
            <div className="form-group">
              <label htmlFor="city"></label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country"></label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="summary"></label>
            <input
              type="textarea"
              className="form-control"
              id="summary"
              placeholder="Summary"
            />
          </div>
          <div className="form-group">
            <label htmlFor="background"></label>
            <input
              type="text"
              className="form-control"
              id="background"
              placeholder="Background"
            />
          </div>
          <br></br>
          <h6>
            <span className="bold">Representative</span> to send the demand to
            once it has been defined and accepted by the group. This should be
            the person who has the authority to raise this issue in parliament.
            If you don't know who, leave it blank for now.
          </h6>
          <div className="flex-spread">
            <div className="form-group">
              <label htmlFor="representativeName"></label>
              <input
                type="text"
                className="form-control"
                id="representativeName"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="representativeEmail"></label>
              <input
                type="text"
                className="form-control"
                id="representativeEmail"
                placeholder="Email"
              />
            </div>
          </div>

          <br></br>
          <h6>One time linking setup:</h6>
          <div className="list-group-item">
            <input
              type="checkbox"
              style={{
                height: 16,
                width: 16
              }}
            />
            <span>
              Create a new account on Twitter called{' '}
              <span className="bold">@xr110references</span>, after this initial
              setup you will not need to touch it again.
            </span>
          </div>
          <div className="list-group-item">
            <input
              type="checkbox"
              style={{
                height: 16,
                width: 16
              }}
            />
            <span>
              Create an account at{' '}
              <a className="bold" href="https://iftt.com">
                IFTTT
              </a>
            </span>
          </div>
          <div className="list-group-item">
            <input
              type="checkbox"
              style={{
                height: 16,
                width: 16
              }}
            />
            <span>
              Setup autotweeting all Tweets with #xr110 through this{' '}
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
            pulled into the # section of your new petition. You won't have to do
            anything.
          </p>
        </form>
        <br></br>
        <h5>Add new demand</h5>
        <br></br>
      </>
    );
  }
}
