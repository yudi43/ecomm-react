import React, { useState, useEffect } from "react";
import ProductCard from "./utils/ProductCard";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://dummyjson.com/products`;
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
    }

    fetch(url + `?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("got data", data);
        setProducts(data.products);
        setLoading(false);
      });
  }, [page, selectedCategory]);

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      {loading && <CircularProgress />}
      {!loading && products.length === 0 && (
        <Typography>No products found.</Typography>
      )}
      {!loading && products.length > 0 && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={1.5}
        >
          {products.map((product) => (
            <ProductCard product={{ product }} />
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ProductList;
