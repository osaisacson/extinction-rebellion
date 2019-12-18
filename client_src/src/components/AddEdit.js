import React, { Component } from "react";
import axios from "axios";

export default class AddEdit extends Component {
  addEdit(newEdit) {
    axios
      .request({
        method: "post",
        url: "https://extinction-rebellion.herokuapp.com/api/edits",
        data: newEdit
      })
      .then(response => {
        alert("Saved!");
        window.location.reload();
      })
      .catch(err => console.log("Error from AddEdit.js:addEdit", err));
  }

  onSubmit(e) {
    const demand = this.props.demand;
    const newEdit = {
      demandId: demand.id,
      editSummary: this.refs.editSummary.value,
      by: this.refs.by.value,
      country: this.refs.country.value
        ? this.refs.country.value
        : demand.country,
      city: this.refs.city.value ? this.refs.city.value : demand.city,
      title: this.refs.title.value ? this.refs.title.value : demand.title,
      summary: this.refs.summary.value
        ? this.refs.summary.value
        : demand.summary,
      background: this.refs.background.value
        ? this.refs.background.value
        : demand.background,
      indicators: this.refs.indicators.value
        ? this.refs.indicators.value
        : demand.indicators,
      representative: this.refs.representative.value
        ? this.refs.representative.value
        : demand.repesentative,
      representativeEmail: this.refs.representativeEmail.value
        ? this.refs.representativeEmail.value
        : demand.representativeEmail
    };
    console.log("newEdit", newEdit);

    this.addEdit(newEdit);
    e.preventDefault();
  }

  render() {
    return (
      <>
        <h6>
          Add a new edit here. Once it reaches 10 upvotes it will update the
          demand.
        </h6>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="editSummary"
              ref="editSummary"
              placeholder="Edit Summary*"
            />
            <label htmlFor="editSummary"></label>

            <input
              className="form-control"
              type="text"
              name="by"
              ref="by"
              placeholder="By whom*"
            />
            <label htmlFor="by"></label>

            <input
              className="form-control"
              type="text"
              name="country"
              ref="country"
              placeholder="Country"
            />
            <label htmlFor="country"></label>

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
              name="title"
              ref="title"
              placeholder="Title"
            />
            <label htmlFor="title"></label>

            <input
              className="form-control"
              type="text"
              name="summary"
              ref="summary"
              placeholder="Summary"
            />
            <label htmlFor="summary"></label>

            <input
              className="form-control"
              type="text"
              name="background"
              ref="background"
              placeholder="Background"
            />
            <label htmlFor="background"></label>

            <input
              className="form-control"
              type="text"
              name="indicators"
              ref="indicators"
              placeholder="Indicators"
            />
            <label htmlFor="indicators"></label>

            <input
              className="form-control"
              type="text"
              name="representative"
              ref="representative"
              placeholder="Representative"
            />
            <label htmlFor="representative"></label>

            <input
              className="form-control"
              type="text"
              name="representativeEmail"
              ref="representativeEmail"
              placeholder="Representative Email"
            />
            <label htmlFor="representativeEmail"></label>
          </div>
          <input
            className="form-input tweak-background-color btn"
            type="submit"
            value="Add new Edit"
          />
        </form>
      </>
    );
  }
}
