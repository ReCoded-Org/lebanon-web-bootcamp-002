import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { StateContext } from "./components/StateProvider";
import CirclePercentage from "./components/CirclePercentage";
import MoviePage from "./components/MoviePage";
import Actors from "./components/Actors";
export default function App() {
  const constructUrl = (query, path = "search/movie") => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  useEffect(() => {
    const URL_Popular =
      "https://api.themoviedb.org/3/movie/popular?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&page=1";
    fetch(URL_Popular)
      .then((response) => response.json())
      .then((json) => dispatch({ type: "SET_MOVIES_DATA", value: json }));
  }, []);

  // const [moviesData, setMoviesData] = useState([]);
  const [state, dispatch] = useContext(StateContext);

  function handleMovies(movies) {
    console.log(constructUrl(movies));
    fetch(constructUrl(movies))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: "SET_MOVIES_DATA", value: json });
      });
  }
  //https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US
  return (
    <div className="App">
      {/* <Actors /> */}
      <NavBar handleMovies={handleMovies} />
      <h1>Movies</h1>

      {/* <MoviePage /> */}

      {/* <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/movie/:movieTitle" component={MoviePage} />
        </Switch>
      </Router> */}

      <Router>
        <Main id="main" />
      </Router>
      <Footer />
    </div>
  );
}
