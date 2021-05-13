import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            {console.log(value)}
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={3}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={" ₹"}
      />
      <button onClick={(e) => history.push("/payment")}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
