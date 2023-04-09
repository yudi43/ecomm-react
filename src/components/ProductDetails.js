import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./utils/Navbar";
import { CircularProgress, Typography } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `https://dummyjson.com/products/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Got the product data:", data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching product:", error);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      {loading && <CircularProgress />}
      {product ? (
        !loading &&
        product.length === 0 && <Typography>No products found.</Typography>
      ) : (
        <div></div>
      )}
      {/* <div>{product.keys().toString}</div> */}
    </div>
  );
}

export default ProductDetail;
