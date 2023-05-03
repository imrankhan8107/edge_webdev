import React from "react";
import "../styles/MovieCard.css";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, API_BASE_URL }) {
  // console.log(movie.imdbID); //=> create a get request and use i parameter and pass imdbID as value to get details of that movie

  // const [movieDetails, setMovieDetails] = useState({});

  // const getMovieDetails = async (movie) => {
  //   let response = await axios.get(
  //     API_BASE_URL + "/?i=" + movie.imdbID + "&apikey=9774ffe"
  //   );
  //   setMovieDetails(response.data);
  //   console.log(response.data);
  // };
  return (
    <>
    {/* using link, we don't need to reload the whole page, we move from one page to another without reloading and react manages everything of pushing and popping the history of the browser, no new index.html is required
    It basically is an anchor tag. reference is added dynamically added by react, so thatanchor tag don't need to reload the page
    react would push a history dynamically, react conditionally also tells what to reload on page but it never reloads the whole page
    */}
      <Link to={`/movie-list/${movie.imdbID}`}>
        <button
          // onClickCapture={() => {
          //   getMovieDetails(movie);
          // }}
          // onClick={() => {
          //   console.log(movieDetails);
          // }}
          className="card-button"
        >
          <div className="movie-card">
            <img
              src={movie.Poster}
              alt={movie.Title}
              height={350}
              width={175}
            />
            <p className="movie-title">{movie.Title}</p>
            <p className="movie-year">Year: {movie.Year}</p>

            {/* <a href={`/movie-list/${movie.imdbID}`}>Link to</a>  <= using a tag is not an issue but the page is being reloaded as we move to the details page, we don't want to reload our page. Our page requires to have a new index.html from server whenever we hit the url in href */}
            {/* Create a popup screen that shows details of a movie on popup. We an use the i parameter instead of s
        i is for imdbId, so we need to pass the imdbId to it inside the url. That will give details of that movie
        */}
          </div>
        </button>
      </Link>
    </>
  );
}
