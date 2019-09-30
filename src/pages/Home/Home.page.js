import React, { lazy, Suspense, useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container
} from "react-bootstrap";
import { getHomepageAd } from "../../api";
const Map = lazy(() => import("../../components/Map"));

function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getHomepageAd(
      res => {
        console.log(JSON.parse(JSON.stringify(res.data))[0]);
        setData(JSON.parse(JSON.stringify(res.data)));
      },
      e => {
        console.log(e);
      }
    );
  }, []);
  return (
    <Row style={{ marginTop: 56 }}>
      <Col>
        <Container>
          <Row style={{ padding: "10px" }}>
            <InputGroup>
              <FormControl aria-describedby="basic-addon1" />
              <InputGroup.Append>
                <Button variant="outline-secondary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <ProductList data={data} />
        </Container>
      </Col>
      <Col>
        <Suspense fallback={<div>Loading...</div>}>
          <Map />
        </Suspense>
      </Col>
    </Row>
  );
}
export default HomePage;
