import React from "react";
import { Grid } from "@mui/material";

import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products }) {

  return (
    <Grid container 
      spacing={2}
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductList;