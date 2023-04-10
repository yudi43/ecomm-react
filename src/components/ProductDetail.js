import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Modal from "@material-ui/core/Modal";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: theme.spacing(1),
  },
  mainImage: {
    width: "100%",
    height: 500,
    objectFit: "contain",
    marginBottom: theme.spacing(1),
  },
  thumbnailImage: {
    width: "80px",
    height: "80px",
    marginRight: theme.spacing(1),
    cursor: "pointer",
  },
  button: {
    marginTop: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary1.main,
    "&:hover": {
      backgroundColor: theme.palette.primary1Dark.main,
    },
  },
  discount: {
    color: "red",
    marginRight: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProductDetail = ({ product }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  const handleAddToCart = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!product) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <div className={classes.imageContainer}>
          <img
            src={product.product.images[selectedImage]}
            alt={product.product.title}
            className={classes.mainImage}
          />
          <Grid container spacing={1}>
            {product.product.images.map((image, index) => (
              <Grid item key={index}>
                <img
                  src={image}
                  alt={`${product.product.title} thumbnail`}
                  className={classes.thumbnailImage}
                  onClick={() => handleThumbnailClick(index)}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <Typography variant="h5" component="h2">
            {product.product.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            {product.product.brand} - {product.product.category}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {product.product.discountPercentage && (
              <span className={classes.discount}>
                {product.product.discountPercentage}% off
              </span>
            )}
            ${product.product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.product.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {product.product.rating.toFixed(2)} stars ({product.product.stock}{" "}
            in stock)
          </Typography>
          <Button variant="contained" className={classes.button}>
            Add to cart
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
