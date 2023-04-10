import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  mainImageContainer: {
    width: "100%",
    height: 400,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    height: "auto",
    maxWidth: 600,
    maxHeight: 400,
  },
  thumbnailContainer: {
    marginTop: theme.spacing(2),
  },
  thumbnail: {
    width: 80,
    height: 80,
    margin: theme.spacing(1),
    cursor: "pointer",
  },
}));

const ProductImages = ({ images }) => {
  const classes = useStyles();
  const [mainImage, setMainImage] = useState(images[0]);

  const handleClickThumbnail = (image) => {
    setMainImage(image);
  };

  return (
    <div className={classes.root}>
      <div className={classes.mainImageContainer}>
        <img src={mainImage} alt="product" className={classes.mainImage} />
      </div>
      <Grid container className={classes.thumbnailContainer}>
        {images.map((image) => (
          <Grid item key={image}>
            <Paper
              elevation={3}
              className={classes.thumbnail}
              onClick={() => handleClickThumbnail(image)}
            >
              <img src={image} alt="product" width="100%" height="100%" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductImages;
