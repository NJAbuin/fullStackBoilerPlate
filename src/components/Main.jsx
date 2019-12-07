import React, { useState, useEffect } from "react";
import List from "../components/List";
import ProductSelect from "./ProductSelect";

import axios from "axios";

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>NUI Shipping App</h1>
      <List productList={products} />
    </div>
  );
}
