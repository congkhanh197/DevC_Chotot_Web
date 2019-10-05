import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ProductItem(props) {
  const {
    image,
    date,
    subject,
    body,
    list_id,
    ward_name,
    area_name,
    price_string,
    rooms
  } = props.adInfo;
  return (
    <Col style={{ minWidth: 300, padding: "10px" }}>
      <NavLink
        to={"/" + list_id}
        style={{
          color: "black",
          textDecoration: "none",
          backgroundColor: "none"
        }}
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
            <Card.Text style={{ height: 30, overflow: "hidden" }}>
              {price_string + " - " + rooms + " Phòng"}
            </Card.Text>
            <Card.Text style={{ height: 42, overflow: "hidden" }}>
              {ward_name + ", " + area_name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{date}</small>
          </Card.Footer>
        </Card>
      </NavLink>
    </Col>
  );
}

export default ProductItem;
