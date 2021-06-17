import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
//import { AppContext } from './StateProvider'
import MoviePage from "./components/MoviePage";
import HomePage from "./components/homepage";
import ActorPage from "./components/actorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [genre, setGenre] = useState(undefined);
  const [moviesData, setMoviesData] = useState([]);
  const [query, setQuery] = useState("");
  // const [movie, setMovie] = useState(undefined);

  const constructUrl = (query, path = "search/movie") => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };
  useEffect(() => {
    if (query === "") {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c804f8530c2990b932ec85cdb5fc2b0b&&lar?api_key=c804f8530c2990b932ec85cdb5fc2b0b&&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((json) => {
          setMoviesData(json.results);
          // console.log(moviesData);
        });
    } else {
      handleMovies(query);
    }
  }, [query]);

  useEffect(() => {
    // console.log(genre);
    console.log(moviesData.filter((m) => m.genre_ids.includes(genre)));
  }, [genre, moviesData]);
  // "https://api.themoviedb.org/3/movie/popular?api_key=c804f8530c2990b932ec85cdb5fc2b0b&"
  // )

  function handleMovies(movies) {
    //console.log(constructUrl(movies));
    fetch(constructUrl(movies))
      .then((response) => response.json())
      .then((json) => {
        setMoviesData(json.results);
      });
  }
  // useEffect(() => {
  //   handleMovies();
  // },[])
  // console.log(moviesData);
  return (
    <Router>
      <div className="App">
        <Navigation setQuery={setQuery} setGenre={setGenre} />

        <Switch>
          <HomePage
            path="/"
            exact
            moviesData={
              genre === undefined
                ? moviesData
                : moviesData.filter((m) => m.genre_ids.includes(genre))
            }
          />
          {/* <Route path="/MoviesGrid">
            <MoviesGrid moviesData={
              genre === undefined ? moviesData : moviesData.filter(m => m.genre_ids.includes(genre))
              } handleMovies={handleMovies} />
          </Route> */}
          <Route path="/MoviePage/:id">
            <MoviePage moviesData={moviesData} />
          </Route>
          <Route path="/ActorPage/:id">
            <ActorPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
