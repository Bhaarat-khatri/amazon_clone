import React from "react";
import moment from "moment";
import "./Order.css";
import Cart from "./Cart";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <hr />
      <p>
        <strong>Date and Time of order : </strong>
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <hr />
      <p className="order_id">
        <small>
          <strong>Order Id : </strong>
          {order.id}
        </small>
      </p>
      <hr />
      {order.data.basket?.map((item) => (
        <>
          <Cart
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
            hideButton={true}
          />
          <hr />
        </>
      ))}
    </div>
  );
}

export default Order;
