import "./App.css";
import NavBar from "./Components/Navbar";
import Main from "./Components/Main";
import Popular from "./Components/Popular";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import fetchMovies from "./Components/componentURL";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const path = "search/movie";
const api_key = "80028c9c6bbc4592fab0a17f612e8b3a";

export const constructUrl = (query, path) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
};

export const popularMovies = (path) => {
  return `https://api.themoviedb.org/3/${path}?api_key=80028c9c6bbc4592fab0a17f612e8b3a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
};

//lal POPULAR l path=discover/movie

export const constructGenre = (id) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=${id}`;
};

function App() {
  const [movies, setMovies] = useState([]);
  function handleMovies(query, path) {
    fetch(constructUrl(query, path))
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function renderPopular(path) {
    fetch(popularMovies(path))
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const renderCategories = (id) => {
    fetch(constructGenre(id))
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        console.log(id);
        setMovies(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <Popular renderPopular={renderPopular} /> */}
      <NavBar function={handleMovies} renderCategories={renderCategories} />
      <Main movies={movies} />
      <Footer />
    </>
  );
}

export default App;
