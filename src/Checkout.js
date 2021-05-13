import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import Cart from "./Cart";
import { useStateValue } from "./Stateprovider";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_banner"
        />

        <div className="checkout_title">
          <h2>
            {basket.length == 0
              ? "Your Amazon Cart is empty."
              : "Shopping Cart"}
          </h2>
          <hr />
          {basket.map((item) => (
            <>
              <Cart
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
              <hr />
            </>
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt="ad"
          className="checkout_ad"
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
