import React from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";


function ProductList(props) {
  const { data, onAdClick } = props;
  return (
    <Row className="justify-content-md-center">
      {data.map(item => (
        <ProductItem
          key={item.list_id}
          adInfo={item}
          onAdClick = {onAdClick}
        />
      ))}
    </Row>
  );
}

export default ProductList;
