import React, { useState, Suspense, lazy } from "react";
import { Col, Row } from "react-bootstrap";
import ChoosePriceForm from "./components/ChoosePriceForm";

const ChartResult = lazy(() => import("./components/ChartResult"));

PricePage.defaultProps = {
  maxYearBorrow: 30,
  maxPrice: 20000000000,
  propertyPrice: 10000000000
};
function PricePage(props) {
  const [borrowDetail, setBorrowDetail] = useState({
    propertyPrice: props.propertyPrice,
    maxPrice: props.maxPrice,
    percentBorrow: 90,
    yearBorrow: 10,
    maxYearBorrow: props.maxYearBorrow,
    interestRate: 7.6,
    program: "1"
  });
  return (
    <div className="container" style={{ marginTop: 56 }}>
      <h2>Tính vay mua nhà</h2>
      <Row className="border rounded">
        <Col className="border rounded" style={{ padding: 15 }}>
          <ChoosePriceForm
            borrowDetail={borrowDetail}
            setBorrowDetail={setBorrowDetail}
          />
        </Col>
        <Col className="border rounded" style={{ padding: 15 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <ChartResult borrowDetail={borrowDetail} />
          </Suspense>
        </Col>
      </Row>
    </div>
  );
}
export default PricePage;
