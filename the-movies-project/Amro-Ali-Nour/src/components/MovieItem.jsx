import {Link} from "react-router-dom";


function MovieItem(props) {
  return (
    <>
      {/* {console.log(props.demMovies)} */}
      {props.demMovies &&
        props.demMovies.map((Movie) => (
          // { link = "https://image.tmdb.org/t/p/w500"  {Movie.poster_path}};
          <li key={Movie.id}>
            {Movie.title}
            {console.log(Movie)}
            <img
              src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
              alt=""
            />
            <button><Link to={`/MoviePage/${Movie.id}`}>Movie Details</Link></button> 
          </li>
        ))}
    </>
  );
}

export default MovieItem;
