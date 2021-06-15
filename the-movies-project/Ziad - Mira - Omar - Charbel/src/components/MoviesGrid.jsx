import React, { useState, useContext } from "react";
import MovieItem from "./MovieItem";
import { StateContext } from "../StateProvider";
import Trending from "./Trending";

const MoviesGrid = ({ genring }) => {
  const [state] = useContext(StateContext);
  let results = state.searched[0];
  let popularResults = state.popularGenre[0];
  let allPopularResults = state.movie;

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
    <>
      <Trending />
      <h3 className="display-4 mt-4 mb-4">Popular:</h3>
      <ul
        style={{ listStyle: "none" }}
        className="d-flex flex-wrap justify-content-center ml-0 pl-0">
        {allPopularResults &&
          allPopularResults.map((movie, i) => (
            <MovieItem key={`${i}`} movie={movie} />
          ))}
      </ul>
    </>
  );
};

export default MoviesGrid;
