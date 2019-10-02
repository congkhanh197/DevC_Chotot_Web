import React, { useState, useEffect } from "react";
import axios from "axios";
import TabView from "./components/TabView";
import { Container, Row, Col, Card } from "react-bootstrap";

import Loading from "../../components/Loading";

function DetailPage(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    Promise.all([
      axios.get(
        process.env.REACT_APP_BASE_URL + "ad-listing" + props.match.url
      ),
      axios.get(process.env.REACT_APP_BASE_URL + "recommend" + props.match.url)
    ])
      .then(function([detail, ad_recommend]) {
        setData(detail.data);
        setRecommend(ad_recommend.data.data);
      })
      .catch(function(error) {
        setError(error.message);
      })
      .finally(function() {
        setLoading(false);
      });
  }, [props.match.url]);
  if (loading) return <Loading />;
  if (error) return <div style={{ marginTop: 56 }}>{error}</div>;
  const { ad, ad_params } = data;
  return (
    <Container style={{ marginTop: 70, background: "lightgray" }}>
      <Row>
        <Col md={12}>
          <TabView images={ad.images} />
          <Row>
            <h2 style={{ marginTop: 20 }}>{ad.subject}</h2>
          </Row>
          <Row>
            <h4 style={{ color: "red" }}>{ad.price_string}</h4>
            <h4>{"  - " + ad_params.size.value}</h4>
          </Row>
          <Row>
            <Col md={1}>
              <img src={ad.avatar} alt={ad.account_name} />
            </Col>
            <Col>
              <h3>{ad.account_name}</h3>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>{ad.body}</Row>
          <Row style={{ marginTop: 20 }}>
            Địa chỉ: {ad_params.address.value}
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col>{ad_params.size.value}</Col>
            <Col>{ad_params.rooms.value}</Col>
          </Row>
          <Row>
            <Col>Toilet: {ad_params.toilets.value}</Col>
            <Col>
              {ad_params.property_legal_document
                ? ad_params.property_legal_document.value
                : "default"}
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        {recommend.map(item => (
          <Card key={item.list_id} style={{ width: 200, margin: 10 }}>
            <Card.Img
              variant="top"
              src={item.image}
              style={{ maxWidth: 200, maxHeight: 100 }}
            />
            <Card.Body>
              <Card.Title style={{ height: 50, overflow: "hidden" }}>
                {item.subject}
              </Card.Title>
              <Card.Text>{item.price_string}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default DetailPage;
