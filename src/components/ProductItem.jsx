import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export class ProductItem extends Component {
  render() {
    console.log(this.props);
    const { image, date, subject, body, list_id } = this.props.adInfo;
    return (
      <Col
        style={{ minWidth: 300, padding: "10px" }}
        onClick={this.props.onAdClick(list_id)}
      >
        <Card>
          <Card.Img style={{ height: 300 }} variant="top" src={image} />
          <Card.Body>
            <Card.Title style={{ height: 50, overflow: "hidden" }}>
              {subject}
            </Card.Title>
            <Card.Text style={{ height: 165, overflow: "hidden" }}>
              {body}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{date}</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default ProductItem;
