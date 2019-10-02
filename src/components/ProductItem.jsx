import React from "react";
import { Card, Col } from "react-bootstrap";

function ProductItem(props) {
  const { image, date, subject, body, list_id } = props.adInfo;
  return (
    <Col
      style={{ minWidth: 300, padding: "10px" }}
      onClick={props.onAdClick(list_id)}
    >
      <Card as="div">
        <Card.Img style={{ height: 300 }} variant="top" src={image} />
        <Card.Body as="div">
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

export default ProductItem;
