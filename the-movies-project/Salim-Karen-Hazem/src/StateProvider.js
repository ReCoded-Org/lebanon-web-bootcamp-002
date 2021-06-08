import React, { createContext, useReducer, useState, useEffect } from "react";

export const AppContext = createContext();

const initialState = {
  movies: [],
  genreId: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.value };
    case "SET_GENRE":
      return { ...state, genreId: action.value };
    default:
      return state;
  }
}

export function StateProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const api_key = "8f1f011d080e1565511d99335cb48312";

const constructUrl = (path, query, genre) => {
  if (query === "") {
    if (genre === 0) {
      return `${TMDB_BASE_URL}/${path}?api_key=${api_key}`;
    } else {
      return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&with_genres=${genre}`;
    }
  } else {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
  }
};

//this function give movies + genreID
export function useMovies(path, query, genre) {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(constructUrl(path, query, genre))
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  };

  useEffect(() => {
    getMovies();
  }, [path, query, genre]);

  return movies;
}

let url =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=8f1f011d080e1565511d99335cb48312&language=en-US";

//this method returned genres Object fetched from url
export function useGenres() {
  const [genres, setGenres] = useState([]);

  const getGenres = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setGenres(json.genres));
  };

  useEffect(() => {
    getGenres();
  }, [url]);

  return genres;
}
