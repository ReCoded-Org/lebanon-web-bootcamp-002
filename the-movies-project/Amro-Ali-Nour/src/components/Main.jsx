import MoviesGrid from "./MoviesGrid";
function Main(props) {
  return (
    <>
      <MoviesGrid demMovies={props.demMovies} />
    </>
  );
}
export default Main;
