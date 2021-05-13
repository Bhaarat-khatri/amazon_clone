import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(Email, Password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/"); 
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <div className="amazon_logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="ss"
          />
        </div>
      </Link>
      <div className="login_box">
        <div className="login_heading">Sign-In</div>
        <form action="post" className="login_info">
          <div className="login_email">
            <div className="LineOne">Email</div>
            <div className="LineTwo">
              <input
                type="text"
                name=""
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="login_Password">
            <div className="LineOne">Password</div>
            <div className="LineTwo">
              <input
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <div className="Login_data">
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </div>
        <button className="createButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
