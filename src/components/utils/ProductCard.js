import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { FaRegHeart } from 'react-icons/fa';

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`;

const StyledTitle = styled(Typography)`
  font-size: 1.2rem;
  font-weight: bold;
`;

const StyledSubtitle = styled(Typography)`
  margin-top: 0.5rem;
  color: #888;
`;

const StyledDescription = styled(Typography)`
  margin-top: 1rem;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const StyledPrice = styled(Typography)`
    margin-left:1rem;
  font-weight: bold;
`;

const StyledDiscount = styled(Typography)`
    margin-left:1rem;
  margin-right: 1rem;
  color: #f44336;
`;

const StyledRating = styled(Rating)`
  font-size: 1.4rem;
  color: #ffd700;
  margin-right: 0.5rem;
`;

const StyledLikeIcon = styled(FaRegHeart)`
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f44336;
  }
`;

const ProductCard = ({ product }) => {
    console.log("this is what the Productcard component is getting:", product.product)
  return (
    <StyledCard>
      <StyledCardMedia
        image={product.product.thumbnail}
        title={product.product.title}
      />
      <StyledCardContent>
        <StyledTitle variant="h2">{product.product.title}</StyledTitle>
        <StyledSubtitle variant="subtitle1">
          {product.product.category} - {product.product.brand}
        </StyledSubtitle>
        <StyledDescription variant="body1">
          {product.product.description}
        </StyledDescription>
      </StyledCardContent>
      <StyledFooter>
        <div>
          <StyledPrice variant="h4">
            ${product.product.price.toFixed(2)}
          </StyledPrice>
          {product.product.discountPercentage > 0 && (
            <StyledDiscount variant="subtitle1">
              {product.product.discountPercentage}% off
            </StyledDiscount>
          )}
        </div>
        <div>
          <StyledRating value={product.product.rating} readOnly />
          <StyledLikeIcon />
        </div>
      </StyledFooter>
    </StyledCard>
  );
};

export default ProductCard;
