import MoviesGrid from "./MoviesGrid";

export default function Main({ moviesData }) {
  console.log(moviesData);

  return <MoviesGrid moviesData={moviesData.results} />;
}
