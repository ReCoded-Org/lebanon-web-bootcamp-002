import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import ReadMoreReact from "read-more-react";
import { StateContext } from "./StateProvider";
export default function MoviesGrid() {
  const [state, dispatch] = useContext(StateContext);

  const moviesData = state.moviesData && state.moviesData.results;

  return (
    <div id="movies">
      {moviesData &&
        moviesData.map((movie) => {
          console.log(movie);
          return (
            <MovieItem
              // setMovieID={setMovieID}
              movie={movie}
              key={movie.id}
              // movieID={movie.id}
              // movieTitle={movie["original_title"]}
              // movieDescription={movie.overview}
              // movieImg={IMG_URL_BASE + movie.poster_path}
            />
          );
        })}
    </div>
  );
}
