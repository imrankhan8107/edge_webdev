import React from "react";
import "../styles/MovieList.css";
import MovieCard from "./MovieCard";

export default function MovieList({
  movieList,
  isLoading,
  page,
  setPage,
  search,
}) {
  if (isLoading) {
    return <h1 className="loading">Loading Movies, Please wait...</h1>;
  } else {
    return (
      <>
        <div className="movie-list">
          {movieList.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} />;
          })}
        </div>

        <div className="pagination">
          {
            <>
              <input
                onClickCapture={(e) => {
                  setPage(page - 1);
                }}
                onClick={(e) => {
                  // setPage(page - 1);
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
                  // setPage(page + 1);
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
