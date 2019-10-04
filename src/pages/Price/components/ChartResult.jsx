import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Chart from "react-apexcharts";
import { formatTextWithComma, formatMoneyUnit } from "../../../utils";

const CHART_OPTIONS = {
  colors: ["#6975c7", "#49b5c1", "#cf67a4"],
  dataLabels: {
    enabled: false
  },
  labels: ["Trả trước", "Trả gốc", "Trả lãi"],
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
      expandOnClick: false,
      donut: {
        size: "80%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "18px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#000000",
            offsetY: -20
          },
          value: {
            show: true,
            fontSize: "30px",
            fontFamily: "Helvetica, Arial, sans-serif",
            color: "#000000",
            offsetY: 3,
            formatter: function(val) {
              return formatMoneyUnit(val, 1);
            }
          },
          total: {
            show: true,
            label: "Tổng",
            color: "#000000",
            formatter: function(w) {
              return formatMoneyUnit(
                w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0),
                1
              );
            }
          }
        }
      }
    }
  }
};

export default function ChartResult({ borrowDetail }) {
  const {
    propertyPrice,
    percentBorrow,
    yearBorrow,
    interestRate
  } = borrowDetail;
  const roundPropertyPrice = Math.round(propertyPrice / 10 ** 8) * 10 ** 8;
  const firstPay = (roundPropertyPrice * (100 - percentBorrow)) / 100;
  const needPay = (roundPropertyPrice * percentBorrow) / 100;
  const interestPay = (needPay * interestRate * yearBorrow) / 100;

  return (
    <>
      <h3>Kết quả</h3>
      <div style={{ backgroundColor: "gray", height: 1, marginBottom: 20 }} />

      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Chart
            options={CHART_OPTIONS}
            series={[firstPay, needPay, interestPay]}
            type="donut"
            width="210"
          />
        </Col>
        <Col>
          Cần trả trước:
          <h5 style={{ color: CHART_OPTIONS.colors[0] }}>
            {formatTextWithComma(firstPay)}
          </h5>
          Gốc cần trả:
          <h5 style={{ color: CHART_OPTIONS.colors[1] }}>
            {formatTextWithComma(needPay)}
          </h5>
          Lãi cần trả:
          <h5 style={{ color: CHART_OPTIONS.colors[2] }}>
            {formatTextWithComma(interestPay)}
          </h5>
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
          <Col md="7" style={{ paddingLeft: 25 }}>
            <h2>
              {formatTextWithComma(
                (needPay * interestRate) / 1200 + needPay / (yearBorrow * 12)
              )}
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
