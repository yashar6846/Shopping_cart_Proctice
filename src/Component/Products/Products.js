// import {useState, useEffect} from "react";
// import Product from "./Product";
// import { mockData } from "../Data/mokData";
// import { Container } from "./styled";
// import axios from 'axios'

// const getI

// const Products = ({ addToCart }) => {
//   const Data = mockData;
//   const productsComponent = Data.map((product) => (
//     <Product key={product.id} addToCart={addToCart} product={product} />
//   ));
//   return <Container>{productsComponent}</Container>;
// };

// export default Products;

//...............>>>>>>>>>>>>>>>>>

import { useState, useEffect } from "react";
import Product from "./Product";
import { Container } from "./styled";
import axios from "axios";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post(
        // process.env.REACT_APP_CONTENTFUL_GRAPHQL_URL +
        "https://graphql.contentful.com/content/v1/spaces/nqk179gklslu/environments/master?access_token=OyYpjmGsFLxcGn4G4PSOlq8Ab4OKWbefRor6vihTsNg",
        {
          query: `query {
              productCollection {
                total
                items {
                  name
                  description
                  sys {
                    id
                  }
                  image {
                      url
                  }
                  price
                }
              }
            }`,
        }
      )
      .then((result) => {
        if (result.status === 200) {
          // result.data.data.productCollection.total
          setProducts(
            result.data.data.productCollection.items.map((item) => ({
              id: item.sys.id,
              name: item.name,
              price: item.price,
              description: item.description,
              image: item.image ? item.image.url : "",
            }))
          );
        } else {
          console.log("Error in products request");
        }
      });
  }, []);

  const productsComponent = products.map((product) => (
    <Product key={product.id} addToCart={addToCart} product={product} />
  ));
  return <Container>{productsComponent}</Container>;
};

export default Products;
