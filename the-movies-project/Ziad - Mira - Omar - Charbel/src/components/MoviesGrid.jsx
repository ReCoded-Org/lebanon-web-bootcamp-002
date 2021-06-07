import React from "react";
import MovieItem from "./MovieItem";

const MoviesGrid = ({ searched, popular, genring }) => {
  let results = searched.results;
  let popularResults = popular.results;
  if (genring) {
    return (
      <ul
        style={{ listStyle: "none" }}
        className="d-flex flex-wrap justify-content-center">
        {popularResults &&
          popularResults.map((movie, i) => <MovieItem movie={movie} />)}
      </ul>
    );
  }
  return (
    <ul
      style={{ listStyle: "none" }}
      className="d-flex flex-wrap justify-content-center">
      {results &&
        results.map((movie, i) => <MovieItem key={`${i}`} movie={movie} />)}
    </ul>
  );
};

export default MoviesGrid;
