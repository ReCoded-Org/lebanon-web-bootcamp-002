import MovieItem from "./MovieItem";

export default function MoviesGrid({ moviesData }) {
  return (
    <div id="movies">
      {moviesData &&
        moviesData.map((movie) => <MovieItem movie={movie} key={movie.id} />)}
    </div>
  );
}
//
