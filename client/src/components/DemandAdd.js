import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default class DemandAdd extends Component {
  onSubmit(e) {
    e.preventDefault();
    console.log("Hurray, submitted");
    console.log("eeeeeeeeeek", e);
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
                  name="representativeName"
                  ref="representativeName"
                  placeholder="Name"
                />
                <label htmlFor="representativeName"></label>
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

  // import React, { Component } from "react";
  // import Card from "react-bootstrap/Card";
  // import { Link } from "react-router-dom";

  // const inputParsers = {
  //   lowercase(input) {
  //     return input.toLowerCase();
  //   },
  //   number(input) {
  //     return parseFloat(input);
  //   }
  // };

  // export default class DemandAdd extends Component {
  //   constructor() {
  //     super();
  //     this.state = {};
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  // stringifyFormData(fd) {
  //   const data = {};
  //   for (let key of fd.keys()) {
  //     data[key] = fd.get(key);
  //   }
  //   return JSON.stringify(data, null, 2);
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   if (!event.target.checkValidity()) {
  //     this.setState({
  //       invalid: true,
  //       displayErrors: true
  //     });
  //     return;
  //   }
  //   const form = event.target;
  //   const data = new FormData(form);

  //   for (let name of data.keys()) {
  //     const input className="form-input" = form.elements[name];
  //     const parserName = input.dataset.parse;
  //     console.log("parser name is", parserName);
  //     if (parserName) {
  //       const parsedValue = inputParsers[parserName](data.get(name));
  //       data.set(name, parsedValue);
  //     }
  //   }

  //   this.setState({
  //     res: data,
  //     invalid: false,
  //     displayErrors: false
  //   });

  // fetch('/api/form-submit-url', {
  //   method: 'POST',
  //   body: data,
  // });
}

// render() {
//   const { res, invalid, displayErrors } = this.state;

//   return (
//     <div>
//       <Card className="add-background-color">
//         <form
//           onSubmit={this.handleSubmit}
//           noValidate
//           className={displayErrors ? "displayErrors" : ""}
//         >
//           <label htmlFor="username">Username:</label>
//           <input
//             id="username"
//             name="username"
//             type="text"
//             data-parse="lowercase"
//             placeholder="your name"
//           />

//           <button>Send data!</button>
//         </form>

//         <div className="res-block">
//           {invalid && <p>check what's missing above</p>}
//           {!invalid && res && (
//             <div>
//               <h4>Demand</h4>
//               <pre>FormData {res}</pre>
//             </div>
//           )}
//         </div>
//       </Card>
//     </div>
//   );
