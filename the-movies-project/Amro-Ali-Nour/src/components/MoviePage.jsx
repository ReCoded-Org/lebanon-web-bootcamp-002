import { useEffect } from "react";
import { Link } from "react-router-dom";

function MoviePage() {
  // const props = {};
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <img src={Movie.backdrop_path} alt="Backdrop Path" />
      <h3>{Movie.title}</h3>
      <h5>{Movie.release_date}</h5>
      <p>{Movie.overview}</p>
      <Link to="/">{"<"}Back</Link>
    </>
  );
}
export default MoviePage;
