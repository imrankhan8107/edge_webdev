import React from "react";
import "../styles/MovieList.css";
import MovieCard from "./MovieCard";

export default function MovieList({
  movieList,
  isLoading,
  page,
  setPage,
  search,
  API_BASE_URL,
}) {
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading Movies, Please wait...</h1>
      </div>
    );
  } else if (isLoading || movieList.length === 0) {
    return <h1 className="loading">Search movies</h1>;
  } else {
    return (
      <>
        <div className="movie-list">
          {movieList.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                API_BASE_URL={API_BASE_URL}
                // getMovieDetails={getMovieDetails}
                // setShow={setShow}
              />
            );
          })}
        </div>

        <div className="pagination">
          {
            <>
              <input
                onClickCapture={(e) => {
                  if (page > 1) {
                    setPage(page - 1);
                  }
                }}
                onClick={(e) => {
                  search(e);
                }}
                value="Previous"
                type="button"
              />
              <span>{page}</span>
              <input
                onClickCapture={(e) => {
                  setPage(page + 1);
                }}
                onClick={(e) => {
                  search(e);
                }}
                value="Next"
                type="button"
              />
            </>
          }
        </div>
      </>
    );
  }
}

/**
 * React onClickCapture is an event handler that gets triggered whenever we click on an element. like onclick,
 *  but the difference is that onClickCapture acts in the capture phase whereas onClick acts in the bubbling phase i.e. phases of an event.
 */
