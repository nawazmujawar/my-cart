import React from "react";
import { useParams } from "react-router-dom";
import myProducts from "../../data/products.json";
import { Container } from "@material-ui/core";
import Product from "../Product";

function SearchView() {
  let { searchQuery } = useParams();
  let productsList = myProducts.Mobile.concat(myProducts.TV);

  const products = [];
  productsList.forEach((product) => {
    let pattern = new RegExp(searchQuery);
    let res = pattern.test(product.productName);

    if (res) {
      products.push(product);
    }
  });

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "stretch",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </Container>
  );
}

export default SearchView;
