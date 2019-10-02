import React from "react";
import { Row, Spinner } from "react-bootstrap";

function Loading() {
  return (
    <Row
      style={{ margin: 50, marginTop: 100 }}
      className="justify-content-md-center"
    >
      <Spinner animation="grow" variant="secondary" />
    </Row>
  );
}
export default Loading
