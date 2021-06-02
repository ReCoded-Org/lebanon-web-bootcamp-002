//import components
import Main from './components/main'
import Navigation from './components/navigation'
import Footer from './components/footer'
import React, { useState } from 'react'

//import css
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//variables
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const api_key = '8f1f011d080e1565511d99335cb48312'
let popularPath = 'movie/popular'

//Working Example Link with Query:
//https://api.themoviedb.org/3/search/movie?api_key=8f1f011d080e1565511d99335cb48312&query=%22Fight%20Club%22

const constructUrl = (path, query) => {
  if (query === '') {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}`
  } else {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`
  }
}

// const example = "https://api.themoviedb.org/3/movie/550?api_key=8f1f011d080e1565511d99335cb48312";

export default function App() {
  let [movies, setMovies] = useState([])
  let [genreId, setGenreId] = useState(0)
  let result = []

  function handleMovie(path, query, genre) {
    fetch(constructUrl(path, query))
      .then((response) => response.json())
      .then((json) => setMovies(json.results))

    setGenreId(genre)
  }

  return (
    <div className='App'>
      <Navigation function={handleMovie} />
      <Main movies={movies} genreId={genreId} function={handleMovie} />
      <Footer />
    </div>
  )
}
