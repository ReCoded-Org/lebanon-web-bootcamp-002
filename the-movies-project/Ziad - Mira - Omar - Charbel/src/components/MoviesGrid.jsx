import React, { useState } from "react";
import MovieItem from "./MovieItem";

const MoviesGrid = ({ searched, popular, genring, allPopular }) => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  let results = searched.results;
  let popularResults = popular.results;
  let allPopularResults = allPopular.results;

  if (genring) {
    return (
      <ul
        style={{ listStyle: "none" }}
        className="d-flex flex-wrap justify-content-center ml-0 pl-0">
        {popularResults &&
          popularResults.map((movie, i) => (
            <MovieItem key={`${i}`} movie={movie} />
          ))}
      </ul>
    );
  }

  if (results) {
    return (
      <ul
        style={{ listStyle: "none" }}
        className="d-flex flex-wrap justify-content-center ml-0 pl-0">
        {results &&
          results.map((movie, i) => <MovieItem key={`${i}`} movie={movie} />)}
      </ul>
    );
  }
  return (
    <ul
      style={{ listStyle: "none" }}
      className="d-flex flex-wrap justify-content-center ml-0 pl-0">
      {allPopularResults &&
        allPopularResults.map((movie, i) => (
          <MovieItem key={`${i}`} movie={movie} />
        ))}
    </ul>
  );
};

export default MoviesGrid;
