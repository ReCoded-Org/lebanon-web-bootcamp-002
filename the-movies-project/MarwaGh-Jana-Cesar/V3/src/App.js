import React, { useState } from "react";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
import MainContent from "./components/main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

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

  return (
    <div className="App">
      <Navigation handleMovies={handleMovies} />

      <h1>Movies</h1>
      <MainContent moviesData={moviesData} id="main" />
      <Footer />
    </div>
  );
}
