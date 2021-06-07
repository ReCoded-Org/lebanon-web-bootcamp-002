import MovieItem from './MovieItem.js';
import '../App.css';
export default function MovieGrid(props) {
  return (
    <div className="movie-container">
     {props.movies.map((movie)=>
      
      <MovieItem key={movie.id} {...movie}/>)}
    </div>
  );
}