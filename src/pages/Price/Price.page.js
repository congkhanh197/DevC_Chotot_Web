import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ChartResult from "./components/ChartResult";
import ChoosePriceForm from "./components/ChoosePriceForm";

PricePage.defaultProps = {
  maxYearBorrow: 30,
  maxPrice: 50000000000,
  initPrice: 10000000000
};
function PricePage(props) {
  const [borrowDetail, setBorrowDetail] = useState({
    percentPrice: 69,
    initPrice: props.initPrice,
    maxPrice: props.maxPrice,
    percentBorrow: 90,
    time: 10,
    maxYearBorrow: props.maxPrice,
    interestRate: 7.6,
    formHorizontalRadios: "1"
  });
  return (
    <div className="container" style={{ marginTop: 56 }}>
      <h2>Tính vay mua nhà</h2>
      <Row className="border rounded">
        <Col style={{ backgroundColor: "lightgray", padding: 10 }}>
          <ChoosePriceForm
            borrowDetail={borrowDetail}
            setBorrowDetail={setBorrowDetail}
          />
        </Col>
        <Col style={{ padding: 15 }}>
          <ChartResult borrowDetail={borrowDetail} />
        </Col>
      </Row>
    </div>
  );
}
export default PricePage;
