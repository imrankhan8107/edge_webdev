import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ setInputValue, inputValue, search }) {
  console.log(inputValue);
  return (
    <div className="navbar">
      <Link to={"/"}>
        <span className="heading">MOVIE DB</span>
      </Link>

      <input
        onChange={(e) => {
          //inputValue = e.target.value;   //wrong, won't trigger a rerender
          setInputValue(e.target.value);
        }}
        onKeyDown={search}
        value={inputValue}
        placeholder="Search..."
        className="search-bar"
        type="text"
      />
    </div>
  );
}
