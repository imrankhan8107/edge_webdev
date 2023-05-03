import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../styles/MovieDetails.css";

export default function MovieDetails() {
  // we are extracting the imdbID(the variable part that we defined using variable imdbID after ":") from the url
  //   const { imdbID } = useParams();  //useParams is a hook, which might be exporting an object with all the parameters that we have in the url, we extract the imdbID from it
  const { id } = useParams(); // object destructruing happening using key
  const [isLoading, setisLoading] = useState(true);
  const [movieDetails, setmovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      let response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=9774ffe`
      );
      console.log(response.data);
      setmovieDetails(response.data);
      setisLoading(false);
    };
    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="details-loading">
        <h1>Movie details are being loaded, Please wait ....</h1>
      </div>
    );
  } else if (movieDetails) {
    return (
      <div className="movie-details">
        <div className="highP">
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            className="poster"
          />
          <div>
            <h1 className="title">
              {movieDetails.Title} ({movieDetails.Year}){" "}
            </h1>
            <p className="actors">Actors: {movieDetails.Actors}</p>
          </div>
        </div>
        <div className="midP">
          <h2>IMDB Ratings: {movieDetails.imdbRating}</h2>
          <h3>Story: {movieDetails.Plot}</h3>
          <p className="awards">Awards: {movieDetails.Awards}</p>
          <p className="release-date">Release Date: {movieDetails.Released}</p>
          <p className="show-type">Type: {movieDetails.Type}</p>
          {movieDetails.Type === "series" ? (
            <p>Total Seasons: {movieDetails.totalSeasons}</p>
          ) : null}
          {movieDetails.Ratings.map((rating) => {
            return (
              <p>
                {rating.Source} : {rating.Value}
              </p>
            );
          })}
          <p>Written By: {movieDetails.Writer}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
