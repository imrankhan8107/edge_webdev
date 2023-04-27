import React from "react";
import "../styles/NavBar.css";

export default function NavBar({ setInputValue, inputValue, search }) {
  console.log(inputValue);
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          //inputValue = e.target.value;   //wrong, won't trigger a rerender
          setInputValue(e.target.value);
        }}
        onKeyDown={search}
        placeholder="Search..."
        className="search-bar"
        type="text"
      />
    </div>
  );
}
