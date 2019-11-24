import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditDemand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBeingDefined: true, //this should be dealt with differently, should only be true if the demand does not meet certain criteria (TBD)
      title: "",
      city: "",
      country: "",
      summary: "",
      background: "",
      indicators: "",
      representative: "",
      representativeEmail: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getDemandDetails();
  }

  getDemandDetails() {
    let demandId = this.props.match.params.id;
    axios
      .get(`http://localhost:3001/api/demands/${demandId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          city: response.data.city,
          country: response.data.country,
          summary: response.data.summary,
          background: response.data.background,
          indicators: response.data.indicators,
          representative: response.data.representative,
          representativeEmail: response.data.representativeEmail
        });
      })
      .catch(err =>
        console.log("Error from EditDemand.js:getDemandDetails", err)
      );
  }

  editDemand(newDemand) {
    axios
      .request({
        method: "put",
        url: `http://localhost:3001/api/demands/${this.state.id}`,
        data: newDemand
      })
      .then(response => {
        alert("Saved");
        // this.props.history.push("/demands");
        console.log(response);
      })
      .catch(err => console.log("Error from EditDemand.js:editDemand", err));
  }

  onSubmit(e) {
    const newDemand = {
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
    this.editDemand(newDemand);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <>
        <Link className="btn grey" to="/">
          Back
        </Link>
        <Card className="add-demand">
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <input
                className="form-input"
                type="text"
                name="title"
                ref="title"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleInputChange}
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
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="city"></label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="country"
                  ref="country"
                  placeholder="Country"
                  value={this.state.country}
                  onChange={this.handleInputChange}
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
                value={this.state.summary}
                onChange={this.handleInputChange}
              />
              <label htmlFor="summary"></label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="background"
                ref="background"
                placeholder="Background"
                value={this.state.background}
                onChange={this.handleInputChange}
              />
              <label htmlFor="background"></label>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="indicators"
                ref="indicators"
                placeholder="Indicators"
                value={this.state.indicators}
                onChange={this.handleInputChange}
              />
              <label htmlFor="indicators"></label>
            </div>
            <br></br>

            <div className="flex-spread">
              <div className="form-group">
                <input
                  type="text"
                  name="representative"
                  ref="representative"
                  placeholder="Rep name"
                  value={this.state.representative}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="representative"></label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="representativeEmail"
                  ref="representativeEmail"
                  placeholder="Email"
                  value={this.state.representativeEmail}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="representativeEmail"></label>
              </div>
            </div>

            <input
              className="form-input tweak-background-color btn float-right"
              type="submit"
              value="Save"
            />
          </form>
          <br></br>
          <br></br>
        </Card>
      </>
    );
  }
}
