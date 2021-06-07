function MovieItem(props) {
  return (
    <>
      {/* {console.log(props.demMovies)} */}
      {props.demMovies &&
        props.demMovies.map((Movie) => (
          // { link = "https://image.tmdb.org/t/p/w500"  {Movie.poster_path}};
          <li key={Movie.id}>
            {Movie.title}
            <img
              src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
              alt=""
            />
            {/* {`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} */}
          </li>
        ))}
    </>
  );
}

export default MovieItem;
