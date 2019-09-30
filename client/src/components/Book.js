import React from 'react';
import Button from 'react-bootstrap/Button';

export class Book extends React.Component {
  constructor() {
    super();

    this.state = {
      bookedText: 'boka'
    };

    this.bookHarvest = this.bookHarvest.bind(this);
  }

  render() {
    return (
      <div className="booking-btn">
        <Button variant="primary" onClick={this.bookHarvest}>
          {' '}
          {this.state.bookedText}{' '}
        </Button>
      </div>
    );
  }

  bookHarvest() {
    this.setState({
      bookedText: 'Bokad! Redo att hämtas imorgon 12:00.'
    });
  }
}
export default Book;
