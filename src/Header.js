import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";

function Header() {
  // window.addEventListener("click", function (event) {
  //   var target = event.target.closest(".header_search");
  //   var searchInput = document.querySelector(".header_search");
  //   if (!target) {
  //     searchInput.classList.remove("header_searchOutline");
  //   } else {
  //     searchInput.classList.add("header_searchOutline");
  //   }
  // });
  const Signout = () => {
    auth.signOut();
  };
  const [{ basket, user }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_location">
        <LocationOnIcon className="location" />
        <div className="header_option">
          <span className="header_optionLineOne">Deliver to MAN</span>
          <span className="header_optionLinetwo">Agra 282005</span>
        </div>
      </div>
      <div className="header_search ">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={Signout}>
            <span className="header_optionLineOne">
              Hello,{user ? user.email : "Guest"}
            </span>
            <span className="header_optionLinetwo">
              {user ? "Sign-Out" : "Sign-In"}
            </span>
          </div>
        </Link>
        <Link to="/order">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLinetwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLinetwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
