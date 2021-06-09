import React, { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
//import { AppContext } from './StateProvider'
import MoviePage from "./components/MoviePage";
import HomePage from "./components/homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [genre, setGenre] = useState(undefined);
  const [moviesData, setMoviesData] = useState([]);
  // const [movie, setMovie] = useState(undefined);

  const constructUrl = (query, path = "search/movie") => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  useEffect(() => {
    // console.log(genre);
    console.log(moviesData.filter((m) => m.genre_ids.includes(genre)));
  }, [genre, moviesData]);

  function handleMovies(movies) {
    console.log(constructUrl(movies));
    fetch(constructUrl(movies))
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setMoviesData(json.results);
      });
  }
  console.log(moviesData);
  return (
    <Router>
      <div className="App">
        <Navigation handleMovies={handleMovies} setGenre={setGenre} />

        <Switch>
          <HomePage
            path="/"
            exact
            moviesData={
              genre === undefined
                ? moviesData
                : moviesData.filter((m) => m.genre_ids.includes(genre))  }
          />
          {/* <Route path="/MoviesGrid">
            <MoviesGrid moviesData={
              genre === undefined ? moviesData : moviesData.filter(m => m.genre_ids.includes(genre))
              } handleMovies={handleMovies} />
          </Route> */}
          <Route path="/MoviePage/:id">
            <MoviePage moviesData={moviesData} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
