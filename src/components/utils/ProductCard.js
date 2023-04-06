import React, { useState } from "react";
import {
  Card,
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
  display: flex;
  align-items: center;
  // font-weight: bold;
  font-size: 1.5em;
`;

const StyledButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  background: none;
  font-size: 1.2rem;
  stroke-width="0.5";
  cursor: pointer;
  color: #888;
  transition: color 0.2s ease-in-out;
  margin: 0 0.5rem;
  &:hover {
    color: #f44336;
  }
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
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
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
              border: "1px solid #f4f7f8",
              borderRadius: "15px",
              backgroundColor: "#f4f7f8",
              marginRight: "15px",
            }}
          >
            <StyledButton aria-label="remove from cart">
              <FaMinus />
            </StyledButton>
            <StyledQuantity>{quantity}</StyledQuantity>
            <StyledButton aria-label="add to cart">
              <FaPlus />
            </StyledButton>
          </div>
        </StyledFooter>
      </StyledCard>
    </Grid>
  );
};

export default ProductCard;
