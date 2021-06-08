import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieGrid from "./MovieGrid";
import { AppContext } from "../StateProvider";

function Main() {
  const [state, dispatch] = useContext(AppContext);
  let movies = state.movies;
  // if (state.genreId !== 0) {
  //   movies = state.movies.filter((movie) => {
  //     if (movie["genre_ids"].find((id) => id === state.genreId)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }
  return <MovieGrid movies={movies} />;

  // {
  //   /* <Route path="/movieDetail/:id" component={<MovieDetails />}></Route> */
  // }
}

export default Main;
