import React from "react";
import "../App.css";
function MovieItem({ title, poster_path, overview, vote_average }) {
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__340.jpg"
        }
        alt={title}
      />

      <div className="movie-info">
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>

      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
}
export default MovieItem;
