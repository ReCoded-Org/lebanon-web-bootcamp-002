import MovieGrid from "./MovieGrid.js";
import "../App.css";
export default function Main(props) {
  return (
    <div>
      <MovieGrid movies={props.movies} />
    </div>
  );
}

/*
import MovieGrid from "./MovieGrid.js";
let popularPath = "movie/popular";
export default function Main(props) {
  let movies = [];
  if (props.genreId !== 0) {
    movies = props.movies.filter((movie) => {
      if (movie["genre_ids"].find((id) => id === props.genreId)) {
        return true;
      } else {
        return false;
      }
    });
  } else {
    movies = props.movies;
  }
  if (movies.length === 0) {
    props.function(popularPath, "", 0);
  }

  console.log(movies);
  return <MovieGrid movies={movies} />;
}
*/
