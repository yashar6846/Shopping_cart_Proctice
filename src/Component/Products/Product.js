import React from "react";
import {
  Container,
  ProductContainer,
  Description,
  Image,
  TextBody,
  Title,
  Price,
} from "./styled";

const Product = (props) => {
  return (
    <ProductContainer>
      <div>
        <Image src={props.image} alt={props.name} />
      </div>
      <TextBody>
        <Description>{props.description}</Description>
        <Title>{props.name}</Title>
      </TextBody>
      <div>
        <Price>${props.price}</Price>
      </div>
    </ProductContainer>
  );
};

export default Product;
