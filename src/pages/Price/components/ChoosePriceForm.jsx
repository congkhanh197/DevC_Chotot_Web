import React from "react";

import { Formik } from "formik";
import { Form } from "react-bootstrap";

export default function ChoosePriceForm({ borrowDetail }) {
  return (
    <Formik
      onSubmit={data => {
        setBorrowDetail(data);
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
                name="percentPrice"
                className="custom-range"
                value={values.percentPrice}
                onChange={e => {
                  handleChange(e);
                  setMoneys([
                    values.percentPrice,
                    values.percentBorrow,
                    values.time
                  ]);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik02">
              <Form.Label> </Form.Label>
              <Form.Control
                disabled
                className="text-center"
                type="text"
                value={formatTextMoney(
                  (values.percentPrice * props.maxPrice) / 100,
                  false,
                  1
                )}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex align-items-center">
            <Form.Group as={Col} md="9" controlId="validationFormik01">
              <Form.Label>Tỷ lệ vay (%)</Form.Label>
              <Form.Control
                type="range"
                name="ratio"
                className="custom-range"
                value={values.percentBorrow}
                onChange={e => {
                  handleChange(e);
                  setMoneys([values.price, values.percentBorrow, values.time]);
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
                name="time"
                className="custom-range"
                value={values.time}
                onChange={e => {
                  handleChange(e);
                  setMoneys([values.price, values.percentBorrow, values.time]);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik02">
              <Form.Label> </Form.Label>
              <Form.Control
                disabled
                className="text-center"
                type="text"
                name="time"
                value={
                  Math.round((values.time * props.maxYearBorrow) / 100) + " năm"
                }
                onChange={e => {
                  handleChange(e);
                  setMoneys([values.price, values.percentBorrow, values.time]);
                }}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="d-flex align-items-center">
            <Form.Group as={Col} md="9" controlId="validationFormik03">
              <Form.Label>Example select</Form.Label>
              <Form.Control
                as="select"
                onChange={e => {
                  handleChange(e);
                  setMoneys([values.price, values.percentBorrow, values.time]);
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
                value={"7.6 %/năm"}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Radios
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  defaultChecked
                  value={1}
                  onChange={e => {
                    handleChange(e);
                    setMoneys([
                      values.price,
                      values.percentBorrow,
                      values.time
                    ]);
                  }}
                  type="radio"
                  label="Thanh toán theo dư nợ giảm dần"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  value={2}
                  onChange={e => {
                    handleChange(e);
                    setMoneys([
                      values.price,
                      values.percentBorrow,
                      values.time
                    ]);
                  }}
                  type="radio"
                  label="Thanh toán đều hàng tháng"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
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
