import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";

export class ProductItem extends Component {
  render() {
    return (
      <Col
        style={{ minWidth: 300, padding: "10px" }}
        className="col-lg-4 col-md-6 col-sm-6"
      >
        <Card>
          <Card.Img
            variant="top"
            src="https://www.incimages.com/uploaded_files/image/970x450/getty_856794670_385651.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default ProductItem;
