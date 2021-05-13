import React, { useEffect, useState } from "react";
import "./Payment.css";
import Cart from "./Cart";
import { useStateValue } from "./Stateprovider";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount / 100,
            created: paymentIntent.created,
          });

        dispatch({
          type: "DELETE_CART",
        });

        history.replace("/order");
      });
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("client ka secret hai>>>>", clientSecret);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <h1>
        Checkout (
        <Link to="/checkout">{basket ? basket.length : "0"} items</Link>)
      </h1>
      <div className="payment_Address">
        <div className="payment_AddressHeading">Delivery Address :</div>
        <div className="payment_AddressDetail">
          F-938,kamla Nagar,Agra,<strong>282005</strong>
        </div>
      </div>
      <hr />
      <div className="payment_Review">
        <div className="payment_reviewHeading">Review Items :</div>
        <div className="payment_reviewDetail">
          {basket.map((item) => (
            <>
              {" "}
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

      <div className="payment_Detail">
        <div className="payment_detailHeading">Payment Method :</div>
        <div className="payment_cardDetail">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />

            <div className="payment_priceContainer">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Order Total :<strong>{value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" ₹"}
              />
            </div>
            <button
              type="submit"
              disabled={processing || disabled || succeeded}
            >
              <span>{processing ? <p>processing</p> : "Buy Now"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
