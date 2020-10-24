import { Button } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import myProducts from "../../data/products.json";
import { useStateValue } from "../StateProvider";
import { Container } from "@material-ui/core";

function SingleProduct(props) {
  let { productId } = useParams();
  console.log("id", productId);
  let productsList = myProducts.Mobile.concat(myProducts.TV);
  let singleProduct = productsList.find((product) => product.id == productId);
  console.log(singleProduct);

  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: singleProduct,
    });
  };

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "0.4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ objectFit: "contain" }} src={singleProduct.imageUrl} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            flex: "0.6",
          }}
        >
          <h1>{singleProduct.productName}</h1>
          <div style={{ display: "flex" }}>
            {Array(singleProduct.rating)
              .fill()
              .map((item, i) => (
                <p>⭐</p>
              ))}
          </div>
          <div style={{ fontSize: "40px", fontWeight: "bold" }}>
            {" "}
            ₹{singleProduct.price}
          </div>
          <h3>Specifications:</h3>
          {singleProduct.specifications.map((specification, index) => (
            <p key={index}>- {specification}</p>
          ))}
          <h3>Description:</h3>
          <p>{singleProduct.description}</p>

          <Button
            style={{
              backgroundColor: "rgb(255,159,0)",
              color: "white",
              width: "150px",
            }}
            onClick={addToBasket}
          >
            Add to Cart
          </Button>
          <h3>Reviews</h3>
          {singleProduct.reviews.map((review, index) => (
            <p key={index}>- {review}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
