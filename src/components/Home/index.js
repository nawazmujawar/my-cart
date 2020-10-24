import React from "react";
import myProducts from "../../data/products.json";
import Product from "../Product";
import { Container } from "@material-ui/core";

function Home() {
  let products = myProducts.Mobile.concat(myProducts.TV);

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

export default Home;
