import React, { useState, useEffect } from "react";

import "./ProductPage.css";

import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList/ProductList";

import axios from "axios";

function ProductPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  });

  return (
    <div>
      <Navbar />
      <div className="product-page">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default ProductPage;