import MovieItem from "./MovieItem";

function MoviesGrid(props) {
  return (
    <>
      <ul>
        <MovieItem demMovies={props.demMovies} />
      </ul>
    </>
  );
}
export default MoviesGrid;
