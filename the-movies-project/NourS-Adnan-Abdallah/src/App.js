import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
export default function App() {
  const constructUrl = (query, path = "search/movie") => {
    const TMDB_BASE_URL = "https://api.themoviedb.org/3";
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  const [moviesData, setMoviesData] = useState("");

  function handleMovies(movies) {
    console.log(constructUrl(movies));
    fetch(constructUrl(movies))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMoviesData(json);
      });
  }
  //https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US
  return (
    <div className="App">
      <NavBar handleMovies={handleMovies} />

      <h1>Movies</h1>
      <Main moviesData={moviesData} id="main" />
      <Footer />
    </div>
  );
}
