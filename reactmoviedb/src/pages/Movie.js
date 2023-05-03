import React from "react";
import { MovieList } from "../components";

export default function Movie({
  movieList,
  isLoading,
  page,
  setPage,
  search,
  API_BASE_URL,
}) {
  return (
    <div>
      <MovieList
        isLoading={isLoading}
        movieList={movieList}
        page={page}
        setPage={setPage}
        search={search}
        API_BASE_URL={API_BASE_URL}
      />
    </div>
  );
}
