import MovieItem from "./MovieItem";

export default function MoviesGrid({ moviesData }) {
  const IMG_URL_BASE = "https://image.tmdb.org/t/p/original";
  return (
    <div id="movies">
      {moviesData &&
        moviesData.map((movie) => (
          <MovieItem
            movieTitle={movie["original_title"]}
            movieDescription={movie.overview}
            movieImg={IMG_URL_BASE + movie.poster_path}
          />
        ))}
    </div>
  );
}
