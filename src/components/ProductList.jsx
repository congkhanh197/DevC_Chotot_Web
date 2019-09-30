import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}
        // className="col-xl-3 col-xl-3"
      >
        {[1, 2, 3, 5, 4, 6, 7].map(item => (
          <ProductItem key={item.toString()} />
        ))}
      </div>
    );
  }
}

export default ProductList;
