import React, { Component } from "react";
import Book from "./../components/Book";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export default class Harvest extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      harvest: window.Dataset.harvest
    };
  }

  onClick() {
    this.setState({ text: "Redo att hämtas imorgon 12:00" });
  }

  render() {
    return (
      <React.Fragment>
        <CardGroup>
          {this.state.harvest.map(item => (
            <Card key={item.id}>
              <Card.Img variant="top" src={item.img} />
              <Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="card-img-overlay-text">
                    {item.title}
                  </Card.Title>
                  {item.subtitle ? (
                    <Card.Text className="card-img-overlay-text">
                      {item.subtitle}
                    </Card.Text>
                  ) : (
                    ""
                  )}
                </Card.Body>
                <Book />
              </Card.ImgOverlay>

              <Card.Footer>
                <small className="text-muted">
                  Last updated {item.lastUpdated}.
                </small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Än så länge har du ätit 56kg hemodlat i år, och genom det minskat
              ditt c02 avtryck med 25kg.
            </p>
          </blockquote>
        </Card>
      </React.Fragment>
    );
  }
}
