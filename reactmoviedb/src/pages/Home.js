import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home({
  setInputValue,
  inputValue,
  search,
  setPage,
}) {
  setPage(1);
  return (
    <div className="homepage">
      <div className="body">
        <h1>Movie Database App</h1>
        <h2>Search Movies</h2>
        <div>
          <input
            className="home-input"
            type="text"
            onChange={(e) => {
              //inputValue = e.target.value;   //wrong, won't trigger a rerender
              setInputValue(e.target.value);
            }}
            placeholder="Search..."
            value={inputValue}
          />
        </div>
        <Link to="/movie-list">
          <button
            className="move-movie-list"
            onClick={async (e) => {
              search(e);
            }}
          >
            <h4>Search Movie</h4>
          </button>
        </Link>
      </div>
      <Link to={"/about"}>
        <button className="move-about">
          <h4>About</h4>
        </button>
      </Link>
    </div>
  );
}
