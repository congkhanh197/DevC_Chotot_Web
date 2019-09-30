import React from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";

function ProductList(props) {
  console.log(props)
  return (
    <Row>
      {[1, 2, 3, 5].map(item => (
        <ProductItem key={item.toString()} />
      ))}
    </Row>
  );
}

export default ProductList;
