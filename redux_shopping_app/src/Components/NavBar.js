import React from "react";
import { NavLink } from "react-router-dom";
import { getCategory } from "../dummy-data/index";
import { toggleCart } from "../store/cart";
import { useSelector, useDispatch } from "react-redux";
import "../styles/NavBar.css";

export default function NavBar() {
  const categories = getCategory();
  const { isOpen } = useSelector((state) => state.cartStore);
  console.log(isOpen);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      {/* Link vs Navlink: in case of link, the classes remains the same for all the items specified using link. But using navlink, an 'active' class is added to the item which is currently active.
       */}
      <NavLink to="/" className="navbar-item">
        Home
      </NavLink>
      <NavLink to="/posts" className="navbar-item">
        Posts
      </NavLink>
      <NavLink to="/about" className="navbar-item">
        About
      </NavLink>
      {categories.map((category, index) => {
        return (
          <NavLink
            to={`/items/${category}`}
            className="navbar-item"
            key={index}
          >
            {category}
          </NavLink>
        );
      })}
      <button
        className="cart-button"
        onClick={() => {
          dispatch(toggleCart(!isOpen));
        }}
      >
        Cart
      </button>
    </div>
  );
}
