import React, { lazy, Suspense } from "react";
import ProductList from "../../components/ProductList";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Map = lazy(() => import("../../components/Map"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Map />
        </Suspense>
      </div>
    </div>
  );
}
export default HomePage;
