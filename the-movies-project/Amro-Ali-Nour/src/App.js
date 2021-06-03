import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import Navig from "./components/Navig";
import Footer from "./components/Footer";
import Main from "./components/Main";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const path = "search/movie";
const constructUrl = (query, path) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};
const constructUrlPopularity = (CategoryId) => {
  return `${TMDB_BASE_URL}/discover/movie?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&language=en-US&with_genres=${CategoryId}`;
};

export default function App() {
  const [demMovies, setDemMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  function handleMovieSearch(query) {
    fetch(constructUrl(query, path))
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setDemMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMovieGenre(query) {
    fetch(constructUrlPopularity(query))
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        setDemMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.genres);
        setGenres(data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

  return (
    <div className="App">
      <Navig
        handleMovieSearch={handleMovieSearch}
        genres={genres}
        handleMovieGenre={handleMovieGenre}
      />
      <Main demMovies={demMovies} />
      <Footer />
    </div>
  );
}
