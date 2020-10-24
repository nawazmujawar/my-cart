import React from "react";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "../StateProvider";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "0.7" }}>
          {basket.map((item, i) => (
            <CheckoutProducts
              key={i}
              id={item.id}
              productName={item.productName}
              price={item.price}
              rating={item.rating}
              imageUrl={item.imageUrl}
              specifications={item.specifications}
              description={item.description}
              reviews={item.reviews}
            />
          ))}
        </div>
        <div style={{ flex: "0.3", marginTop: "30px" }}>
          <SubTotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
