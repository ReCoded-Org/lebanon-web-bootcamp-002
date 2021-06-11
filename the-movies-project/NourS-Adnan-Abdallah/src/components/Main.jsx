import { useState, useContext } from "react";
import MoviesGrid from "./MoviesGrid";
import MoviePage from "./MoviePage";
import { StateContext } from "./StateProvider";
import Actors from "./Actors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
export default function Main() {
  // console.log(moviesData);
  // const [showMoviePage, setMoviePage] = useState(false);
  //const [movieID, setMovieID] = useState("");
  // const [state, dispatch] = useContext(StateContext);  return (
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={MoviesGrid}
          // render={() => {
          //   console.log("in / route");
          //   return <MoviesGrid />;
          // }}
        />
        <Route path="/footer" component={Footer} />
        <Route path="/:movieActor" exact component={Actors} />
        <Route
          path="/movie/:movieTitle"
          component={MoviePage}
          // render={() => <MoviePage />}
        />
      </Switch>
    </Router>
  );
  //https://api.themoviedb.org/3/movie/popular?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&page=1
  // return showMoviePage ? (
  //   <MoviePage id={movieID} setMoviePage={setMoviePage} />
  // ) : (
  //   <MoviesGrid
  //     moviesData={moviesData.results}
  //     setMoviePage={setMoviePage}
  //     setMovieID={setMovieID}
  //   />
  // );
}
