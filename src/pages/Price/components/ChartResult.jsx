import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Chart from "react-apexcharts";

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
        size: "80%",
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
              return formatTextMoney(
                w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0),
                false
              );
            }
          }
        }
      }
    }
  }
};

export default function ChartResult({}) {
  return (
    <>
      <h3>Kết quả</h3>
      <div style={{ backgroundColor: "gray", height: 1, marginBottom: 20 }} />

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
          <h5 style={{ color: CHART_OPTIONS.colors[0] }}>
            {formatTextMoney(moneys[0] * 10 ** 8)}
          </h5>
          Gốc cần trả:
          <h5 style={{ color: CHART_OPTIONS.colors[1] }}>
            {formatTextMoney(moneys[1] * 10 ** 8)}
          </h5>
          Lãi cần trả:
          <h5 style={{ color: CHART_OPTIONS.colors[2] }}>
            {formatTextMoney(moneys[2] * 10 ** 8)}
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
            <h2>{moneys.reduce((a, b) => a + b, 0) * 10 ** 8}</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
