import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default class Choices extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      choices: window.Dataset.choices
    };
  }

  onClick() {
    this.setState({ text: 'Redo att hämtas imorgon 12:00' });
  }

  render() {
    return (
      <CardGroup>
        {this.state.choices.map(item => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              {item.description ? (
                <Card.Text>{item.description}</Card.Text>
              ) : (
                ''
              )}
            </Card.Body>

            <Card.Footer className="one-line-spread">
              <Button variant="primary">Ja!</Button>
              <Button variant="primary">Nej!</Button>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    );
  }
}
