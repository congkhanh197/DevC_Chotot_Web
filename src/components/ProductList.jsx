import React from "react";
import ProductItem from "./ProductItem";
import { Row } from "react-bootstrap";


function ProductList(props) {
  console.log(props);
  const { data } = props;
  return (
    <Row className="justify-content-md-center">
      {data.map(item => (
        <ProductItem
          key={item.list_id}
          adInfo={item}
          onAdClick={listId => () => console.log(listId)}
        />
      ))}
    </Row>
  );
}

export default ProductList;
