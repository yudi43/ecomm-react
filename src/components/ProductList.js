import React, { useState, useEffect } from "react";
import ProductCard from "./utils/ProductCard";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("UseEffect of ProductList");
    let url = `https://dummyjson.com/products`;
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
    }

    fetch(url + `?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, [page, selectedCategory, products]);

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      {loading && <CircularProgress />}
      {products ? (
        !loading &&
        products.length === 0 && <Typography>No products found.</Typography>
      ) : (
        <div></div>
      )}
      {products ? (
        !loading &&
        products.length > 0 && (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1.5}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={{ product }} />
            ))}
          </Grid>
        )
      ) : (
        <div></div>
      )}
    </Box>
  );
}

export default ProductList;
