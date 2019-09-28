import React from "react";
import Map from "../../components/Map";
import ProductList from "../../components/ProductList";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function HomePage() {
  return (
    <div style={{ marginTop: 56 }}>
      <div style={{ width: "50%" }}>
        <div style={{ padding: "10px" }}>
          <InputGroup>
            <FormControl aria-describedby="basic-addon1" />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <ProductList />
      </div>
      <div
        style={{
          position: "fixed",
          right: 0,
          top: 56,
          width: "50%",
          height: "94%",
          backgroundColor: "gray"
        }}
      >
        <Map />
      </div>
    </div>
  );
}
export default HomePage;
