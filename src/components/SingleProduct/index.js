import { Button } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import myProducts from "../../data/products.json";
import { useStateValue } from "../StateProvider";
import "./style.css";

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
    <div className="singleProduct">
      <div className="singleProduct__product">
        <div className="singleProduct__image">
          <img style={{ objectFit: "contain" }} src={singleProduct.imageUrl} />
        </div>
        <div className="singleProduct__details">
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
