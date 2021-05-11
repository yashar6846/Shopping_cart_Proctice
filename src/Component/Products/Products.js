import React from "react";
import Product from "./Product";
import { mockData } from "../Data/mokData";
import { Container } from "./styled";

const Products = (props) => {
  const Data = mockData;
  const productsComponent = Data.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      description={product.description}
      image={product.image}
      price={product.price}
    />
  ));
  return <Container>{productsComponent}</Container>;
};

export default Products;
