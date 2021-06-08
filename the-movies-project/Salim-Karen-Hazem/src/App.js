//import components
import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContext } from './StateProvider'
import Main from './components/main'
import Navigation from './components/navigation'
import Footer from './components/footer'
import MovieDetails from './components/movieDetails'

//import css
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//variables
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const api_key = '8f1f011d080e1565511d99335cb48312'
let popularPath = 'movie/popular'

const constructUrl = (path, query) => {
  if (query === '') {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}`
  } else {
    return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`
  }
}

export default function App() {
  const [state, dispatch] = useContext(AppContext)
  // let [movies, setMovies] = useState([]);
  // let [genreId, setGenreId] = useState(0);

  useEffect(() => {
    handleMovie(popularPath, '', 0)
    console.log('calling useEffect')
  }, [])

  function handleMovie(path, query, genre) {
    fetch(constructUrl(path, query))
      .then((response) => response.json())
      .then((json) => dispatch({ type: 'SET_MOVIES', value: json.results }))

    dispatch({ type: 'SET_GENRE', value: genre })
  }

  return (
    <Router>
      <Navigation function={handleMovie} />
      {/* {console.log(state)} */}
      <Switch>
        <Route
          path='/'
          exact
          render={() => <Main movies={state.movies} genreId={state.genreId} />}
        />
        <Route path='/movie/:id' component={MovieDetails} />
      </Switch>
      <Footer />
    </Router>
  )
}
