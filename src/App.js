import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import Payment from "./Payment";
import { auth } from "./firebase";
import Slide from "./Slide";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from "./Stateprovider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{}, dispatch] = useStateValue();
  const promise = loadStripe(
    "pk_test_51IpxTgSBtUitorQGQFw9rFzXCXiZGgcfhgpQUJu3thkeiLxyN1k0EZCU6l6ZgrlGTGyZovIFqs4w6QH2CSDCXbAI00KPLZ6EPB"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
