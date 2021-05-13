import React from "react";
import "./Cart.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./Stateprovider";

function Cart({ title, rating, image, price, hideButton }) {
  const [{}, dispatch] = useStateValue();

  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        title: title,
      },
    });
  };

  return (
    <div className="cart">
      <img src={image} alt="" />
      <div className="cart_data">
        <div className="cart_title">{title}</div>
        <div className="cart_price">₹ {price}</div>
        <div className="cart_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
        {!hideButton && (
          <button className="cart_remove" onClick={RemoveFromCart}>
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
