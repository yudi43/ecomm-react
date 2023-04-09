import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { FaRegHeart } from "react-icons/fa";
import styled, { css } from "styled-components";
import theme from "../../themes/theme";
import { Add, Remove } from "@material-ui/icons";
import { FaMinus, FaPlus } from "react-icons/fa";

const StyledCard = styled(Card)`
  margin: 0.4rem;
  height: 100%;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 50%;
`;

const StyledCardContent = styled(CardContent)`
  height: 8rem;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  text-align: left;
`;

const StyledSubtitle = styled(Typography)`
  font-size: 0.9rem;
  text-align: left;
`;

const StyledDescription = styled(Typography)`
  ${(props) => css`
    color: ${props.theme.palette.text.secondary};
  `}
  && {
    border-radius: 6px;
    padding: 4px;
    text-align: left;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    text-overflow: ellipsis;
    max-width: 100%;
    background-color: #f4f7f8;
  }
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledPrice = styled(Typography)`
  font-size: 1.2rem;
  padding-left: 15px;
`;

const StyledDiscount = styled(Typography)`
  // margin-right: 100%;
  padding-left: 5px;
  // padding-bottom: 10px;
  color: #f44336;
  font-size: 0.8rem;
`;

const StyledRating = styled(Rating)`
  font-size: 1.4rem;
  color: #ffd700;
  margin-right: 100%;
`;

const StyledLikeIcon = styled(FaRegHeart)`
  font-size: 1.4rem;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #f44336;
  }
`;

const StyledQuantity = styled.div`
  ${(props) => css`
    background-color: ${props.theme.palette.primary1.main};
    color: ${props.theme.palette.bg.main};
    //
  `}
  display: flex;
  align-items: center;
  // font-weight: bold;
  font-size: 1.5em;
`;

const StyledButton = styled.button`
  ${(props) => css`
    background-color: ${props.theme.palette.primary1.main};
    color: ${props.theme.palette.bg.main};
    &:hover {
      color: ${props.theme.palette.secondary.main};
    }
  `}
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  // color: #888;
  transition: color 0.2s ease-in-out;
  margin: 0 0.5rem;
`;

const AddToCartContainer = styled.div`
  display: "flex",
  align-items: "center",
  justify-content: "center",
  border: "4px solid #127CDF",
  border-radius: "15px",
  background-color: "#127CDF",
  margin-right: "15px",
`;

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleRemoveItemFromCart = (event, prd) => {
    // remove product 'prd' from cart
    event.stopPropagation();
  };

  const handleAddItemToCart = (event, prd) => {
    // add product 'prd' to cart
    event.stopPropagation();
  };

  const handleProductCardClick = (event, prd) => {
    // add product 'prd' to cart
    console.log("this was the event variable: ", event);
    console.log("clicked on the card with product as : ", prd);

    // navigate user from here to product detail page with id of the product
    let productId = prd.product.id;
    console.log("This is the productId", productId);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea
        onClick={(event) => handleProductCardClick(event, product)}
      >
        <StyledCard>
          <StyledCardMedia
            image={product.product.thumbnail}
            title={product.product.title}
          />

          <div>
            <StyledCardContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <StyledTitle variant="body1">
                    {product.product.title}
                  </StyledTitle>
                  <StyledSubtitle variant="subtitle2">
                    {product.product.brand} - {product.product.category}
                  </StyledSubtitle>
                </div>
                <StyledLikeIcon />
              </div>
              <StyledRating value={product.product.rating} readOnly />
              <StyledDescription variant="body1" theme={theme}>
                {truncate(product.product.description, 80)}
              </StyledDescription>
            </StyledCardContent>
          </div>
          <StyledFooter>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <StyledPrice variant="h5">
                ${product.product.price.toFixed(2)}
              </StyledPrice>
              {product.product.discountPercentage > 0 && (
                <StyledDiscount variant="subtitle3">
                  (-{product.product.discountPercentage}%)
                </StyledDiscount>
              )}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #127CDF",
                borderRadius: "15px",
                backgroundColor: "#127CDF",
                marginRight: "15px",
              }}
            >
              <StyledButton
                disableElevation
                theme={theme}
                aria-label="remove from cart"
                onClick={(event) =>
                  handleRemoveItemFromCart(event, product.product)
                }
              >
                <FaMinus />
              </StyledButton>
              <StyledQuantity theme={theme}>{quantity}</StyledQuantity>
              <StyledButton
                disableElevation
                theme={theme}
                aria-label="add to cart"
                onClick={(event) => handleAddItemToCart(event, product.product)}
              >
                <FaPlus />
              </StyledButton>
            </div>
          </StyledFooter>
        </StyledCard>
      </CardActionArea>
    </Grid>
  );
};

export default ProductCard;
