/*import React, { useState } from "react";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const path = "discover/movie";
const api_key = "80028c9c6bbc4592fab0a17f612e8b3a";

export const constructUrl = (query, path) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
};

export default function fetchMovies() {
  const [movies, setMovies] = useState([]);
  return (
<div>{
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
  </div>

  )
  
}
*/
//https://api.themoviedb.org/3/movie/2?api_key=80028c9c6bbc4592fab0a17f612e8b3a&language=en-US
