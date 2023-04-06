import React, { useState, useEffect } from "react";
import ProductCard from "./utils/ProductCard";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log("fetching inital products data");
    fetch(`https://dummyjson.com/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("got data", data);
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);
        setHasMore(data.length > 0);
      });
  }, [page]);

  const handleDelete = (productId) => {
    fetch(`https://dummyjson.com/api/products/${productId}`, {
      method: "DELETE",
    }).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    });
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      {loading && <CircularProgress />}
      {!loading && products.length === 0 && (
        <Typography>No products found.</Typography>
      )}
      {!loading && products.length > 0 && (
        <Grid container justifyContent="center" alignItems="center">
          {products.map((product) => (
            <ProductCard product={{ product }} />
          ))}
        </Grid>
      )}
      {hasMore && (
        <Box sx={{ mt: 2 }}>
          <button onClick={handleLoadMore}>Load More</button>
        </Box>
      )}
    </Box>
  );
}

export default ProductList;
