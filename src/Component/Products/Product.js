// import React from "react";
import {
  Container,
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
  Button,
} from "./styled";

const Product = ({ product, addToCart }) => {
  return (
    <ProductContainer>
      <div>
        <Image src={product.image} alt={product.name} />
      </div>
      <TextBody>
        <Description>{product.description}</Description>
        <Title>{product.name}</Title>
      </TextBody>
      <div>
        <Price>${product.price}</Price>
        <Button onClick={() => addToCart(product)}>Bay</Button>
      </div>
    </ProductContainer>
  );
};

export default Product;
