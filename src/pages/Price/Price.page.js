import React, { useState } from "react";

import { Formik } from "formik";
import Chart from "react-apexcharts";

import { Col, Form, Button, Row, Container } from "react-bootstrap";

const CHART_OPTIONS = {
  colors: ["#6975c7", "#49b5c1", "#cf67a4"],
  dataLabels: {
    enabled: false
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: true,
          position: "bottom"
        }
      }
    }
  ],
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
      donut: {
        size: "85%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "15px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#ff33ff",
            offsetY: 15
          },
          value: {
            show: true,
            fontSize: "30px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#000000",
            offsetY: -17,
            formatter: function(val) {
              return val;
            }
          },
          total: {
            show: true,
            label: "Total",
            color: "#ff33ff",
            formatter: function(w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            }
          }
        }
      }
    }
  }
};

PricePage.defaultProps = {
  maxYearBorrow: 30,
  maxPrice: 10,
  price: 6.9
};
function PricePage(props) {
  const [moneys, setMoneys] = useState([props.price * 10, 90, 10]);
  const [borrowDetail, setBorrowDetail] = useState({
    price: 69,
    ratio: 90,
    time: 10,
    percent: 7.6,
    formHorizontalRadios: "1"
  });
  return (
    <div className="container" style={{ marginTop: 56 }}>
      <h2>Tính vay mua nhà</h2>
      <Row className="border rounded">
        <Col style={{ backgroundColor: "lightgray", padding: 10 }}>
          <Formik
            onSubmit={data => {
              console.log(data);
            }}
            initialValues={borrowDetail}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row className="d-flex align-items-center">
                  <Form.Group as={Col} md="9" controlId="validationFormik01">
                    <Form.Label>Giá trị nhà đất (tỷ VNĐ)</Form.Label>
                    <Form.Control
                      type="range"
                      name="price"
                      className="custom-range"
                      value={values.price}
                      onChange={e => {
                        handleChange(e);
                        setMoneys([values.price, values.ratio, values.time]);
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik02">
                    <Form.Label> </Form.Label>
                    <Form.Control
                      disabled
                      className="text-center"
                      type="text"
                      name="price"
                      value={
                        (
                          Math.round((values.price * props.maxPrice) / 10) / 10
                        ).toFixed(1) + " tỷ"
                      }
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
                      value={values.ratio}
                      onChange={e => {
                        handleChange(e);
                        setMoneys([values.price, values.ratio, values.time]);
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
                      value={values.ratio + " %"}
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
                        setMoneys([values.price, values.ratio, values.time]);
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
                        Math.round((values.time * props.maxYearBorrow) / 100) +
                        " năm"
                      }
                      onChange={e => {
                        handleChange(e);
                        setMoneys([values.price, values.ratio, values.time]);
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
                        setMoneys([values.price, values.ratio, values.time]);
                      }}
                    >
                      <option>Mặc định</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md="3" className="d-flex align-self-end">
                    <Form.Control
                      disabled
                      className="text-center"
                      type="text"
                      name="time"
                      value={"7.6 %"}
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
                          setMoneys([values.price, values.ratio, values.time]);
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
                          setMoneys([values.price, values.ratio, values.time]);
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
        </Col>
        <Col style={{ padding: 15 }}>
          <h3>Kết quả</h3>
          <div
            style={{ backgroundColor: "gray", height: 1, marginBottom: 20 }}
          />

          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Chart
                options={CHART_OPTIONS}
                series={moneys}
                type="donut"
                width="190"
              />
            </Col>
            <Col>
              Cần trả trước:
              <h4 style={{ color: CHART_OPTIONS.colors[0] }}>
                {moneys[0] * 10 ** 8}
              </h4>
              Gốc cần trả:
              <h4 style={{ color: CHART_OPTIONS.colors[1] }}>
                {moneys[1] * 10 ** 8}
              </h4>
              Lãi cần trả:
              <h4 style={{ color: CHART_OPTIONS.colors[2] }}>
                {moneys[2] * 10 ** 8}
              </h4>
            </Col>
          </Row>
          <div
            style={{
              backgroundColor: "gray",
              height: 1,
              marginTop: 20,
              marginBottom: 20
            }}
          />
          <Container>
            <Row className="d-flex align-items-center">
              <Col md="5" className="d-flex justify-content-center">
                Thanh toán tháng đầu
              </Col>
              <Col md="7" style={{paddingLeft:25}}>
                <h2>{moneys.reduce((a, b) => a + b, 0) * 10 ** 8}</h2>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
}
export default PricePage;
