import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect,  useContext } from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MoviePage from "./components/MoviePage"
import {BrowserRouter as Router, Route } from "react-router-dom";
import { StateContext } from "../src/StateProvider";
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genring, setGenring] = useState(false)
  const [genreId, setGenreId] = useState([])
  const [state, dispatch] = useContext(StateContext);
  
  const TMDB_BASE_URL = "https://api.themoviedb.org"
  
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&query=${query}`;
  };
  
  useEffect (()=> {
    let path = "3/search/movie"
    let url = constructUrl(path, searchTerm)
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setGenring(false)
        dispatch({ type: "SET_SEARCHED", searched: data.results })
      });
  }, [searchTerm])

  useEffect(() => {
    let path = "3/genre/movie/list"
    let url = `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6`
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
      dispatch({ type: "SET_GENRES", genre: data.genres })
    })
  }, [])

  useEffect (()=>{
    let path = "3/movie/popular";
    let url = `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6`
    fetch(url) 
    .then((resp) =>resp.json())
    .then((data) =>  {
      dispatch({ type: "SET_MOVIES", movie: data.results })
  })
  },[])

  useEffect(() => {
    let CategoryId = genreId
    let path = "3/discover/movie"
    let url = `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&with_genres=${CategoryId}`
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>{
      setGenring(true)
      dispatch({ type: "SET_POPULAR_GENRE", popularGenre: data.results })
         
  })
}, [genreId])

  return (
    <div className="App">
          <Router>
              <Navi searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenreId = {setGenreId} /> 
              <Route path="/moviepage/:title" component={MoviePage}/>
              <Route path="/" exact>
                <Main genring = {genring}  genreId={genreId}  />
              </Route>
          </Router>
          <Footer />
    </div>
  );
}



