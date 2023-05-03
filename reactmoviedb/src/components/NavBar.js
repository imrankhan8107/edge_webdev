import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ setInputValue, inputValue, search, setPage }) {
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
        onKeyDown={(e) => {
          setPage(1);
          search(e);
        }}
        value={inputValue}
        placeholder="Search..."
        className="search-bar"
        type="text"
      />
    </div>
  );
}
