import React from "react";
import { Formik } from "formik";
import { Form, Button, Col, Row } from "react-bootstrap";
import { formatMoneyUnit } from "../../../utils";

export default function ChoosePriceForm({ borrowDetail, setBorrowDetail }) {
  return (
    <Formik
      onSubmit={data => {
        console.log("form data", data);
        setBorrowDetail({ ...borrowDetail, ...data });
      }}
      initialValues={borrowDetail}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row className="d-flex align-items-center">
            <Form.Group as={Col} md="9" controlId="validationFormik01">
              <Form.Label>Giá trị nhà đất (tỷ VNĐ)</Form.Label>
              <Form.Control
                type="range"
                name="propertyPrice"
                className="form-control-range slider"
                min="100000000"
                max={borrowDetail.maxPrice}
                value={values.propertyPrice}
                onChange={e => {
                  handleChange(e);
                  setBorrowDetail({
                    ...borrowDetail,
                    ...values,
                    propertyPrice: e.target.value
                  });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik02">
              <Form.Label> </Form.Label>
              <Form.Control
                disabled
                className="text-center"
                type="text"
                value={formatMoneyUnit(values.propertyPrice, 1)}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex align-items-center">
            <Form.Group as={Col} md="9" controlId="validationFormik01">
              <Form.Label>Tỷ lệ vay (%)</Form.Label>
              <Form.Control
                type="range"
                name="percentBorrow"
                className="form-control-range"
                value={values.percentBorrow}
                onChange={e => {
                  handleChange(e);
                  setBorrowDetail({
                    ...borrowDetail,
                    ...values,
                    percentBorrow: parseInt(e.target.value)
                  });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik02">
              <Form.Label> </Form.Label>
              <Form.Control
                disabled
                className="text-center"
                type="text"
                name="ratio"
                value={values.percentBorrow + " %"}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex align-items-center">
            <Form.Group as={Col} md="9" controlId="validationFormik01">
              <Form.Label>Thời hạn vay (năm)</Form.Label>
              <Form.Control
                type="range"
                name="yearBorrow"
                min="1"
                max={borrowDetail.maxYearBorrow}
                className="form-control-range"
                value={values.yearBorrow}
                onChange={e => {
                  handleChange(e);
                  setBorrowDetail({
                    ...borrowDetail,
                    ...values,
                    yearBorrow: e.target.value
                  });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik02">
              <Form.Label> </Form.Label>
              <Form.Control
                disabled
                className="text-center"
                type="text"
                value={values.yearBorrow + " năm"}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex align-items-center">
            <Form.Group as={Col} md="9" controlId="validationFormik03">
              <Form.Label>Lãi suất %/năm</Form.Label>
              <Form.Control
                as="select"
                onChange={e => {
                  handleChange(e);
                  setBorrowDetail({ ...borrowDetail, ...values });
                }}
              >
                <option>Mặc định</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="3" className="d-flex align-self-end">
              <Form.Control
                disabled
                className="text-center"
                type="text"
                name="time"
                value={values.interestRate + " %"}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <fieldset>
            <Form.Group as={Row}>
              <Col>
                <Form.Check
                  defaultChecked
                  value={1}
                  onChange={e => {
                    handleChange(e);
                  }}
                  type="radio"
                  label="Thanh toán theo dư nợ giảm dần"
                  name="program"
                />
              </Col>
              <Col>
                <Form.Check
                  value={2}
                  onChange={e => {
                    handleChange(e);
                  }}
                  type="radio"
                  label="Thanh toán đều hàng tháng"
                  name="program"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Button type="submit" block>
            Kết quả
          </Button>
        </Form>
      )}
    </Formik>
  );
}
