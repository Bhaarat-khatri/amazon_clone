import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, price, ratings, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the dataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: ratings,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" srcSet="" />

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
