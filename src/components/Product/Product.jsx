import React from "react";
import Charts from "../Pages/Charts/Charts";
import { productData } from "../../DummyData";

const Product = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <Charts data={productData} datakey="Sales" title="Sales Performace" />
    </div>
  );
};

export default Product;
