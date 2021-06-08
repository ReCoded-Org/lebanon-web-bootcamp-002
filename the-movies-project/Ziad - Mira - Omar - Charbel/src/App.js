import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Navi from "./components/Navi";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [searched, setSearched] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genring, setGenring] = useState(false)
  const[genre, setGenre] = useState([]) 
  const [genreId, setGenreId] = useState([])
  const[popular, setPopular] = useState([])
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
        setSearched(data)
      });
  }, [searchTerm])

  useEffect(() => {
    let path = "3/genre/movie/list"
    let url = `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6`
    fetch(url)
    .then((resp)=> resp.json())
    .then((data)=>{
      
      setGenre(data)}
      )
  }, [])

  useEffect(() => {
    let CategoryId = genreId
    let path = "3/discover/movie"
    let url = `${TMDB_BASE_URL}/${path}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&with_genres=${CategoryId}`
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>{
      setGenring(true)
      setPopular(data)      
  })
  
}, [genreId])
  return (
    <div className="App">
      <Navi searchTerm={searchTerm} setSearchTerm={setSearchTerm} setGenre={setGenre} genre={genre} setGenreId = {setGenreId} popular = {popular} />
      <Main genring = {genring} searched={searched} popular={popular} genreId={genreId} />
      <Footer />
    </div>
  );
}


