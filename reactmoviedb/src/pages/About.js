import React from "react";
import "../styles/About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <h1 className="heading">Movie Database Website</h1>
      <h2 className="webInfo">
        Movie Database is a website where you can search for movies and get all
        the details about the movie.
      </h2>
      <p className="webInfo">
        Website uses the OMDB API to fetch the movie data.
      </p>
      <p className="webInfo">
        OMDB is a free API which provides data about movies. we can search for
        movies using the search term and page number.
      </p>
      <p className="webInfo">
        We get all the details about the movie like title, year, poster, imdbID,
        etc. from the API.
      </p>
      <Link to={"/"}>
        <button className="back-btn">
          <h4>Move to HomePage</h4>
        </button>
      </Link>
    </div>
  );
}
