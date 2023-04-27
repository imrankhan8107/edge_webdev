import React from "react";
import "../styles/MovieCard.css";

export default function MovieCard({ movie }) {
  //   console.log(movie.imdbID);  => create a get request and use i parameter and pass imdbID as value to get details of that movie
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} height={350} width={175} />
      <p className="movie-title">{movie.Title}</p>
      <p className="movie-year">Year: {movie.Year}</p>
      {/* Create a popup screen that shows details of a movie on popup. We an use the i parameter instead of s
      i is for imdbId, so we need to pass the imdbId to it inside the url. That will give details of that movie
      */}
    </div>
  );
}
