import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { StateContext } from "./StateProvider";
import ReadMoreReact from "read-more-react";
import { useHistory } from "react-router-dom";
export default function MovieItem({
  setMoviePage,
  movie
  // movieTitle,
  // movieImg,
  // movieID,
  // movieDescription,
}) {
  const [state, dispatch] = useContext(StateContext);
  let history = useHistory();
  const IMG_URL_BASE = "https://image.tmdb.org/t/p/original";

  function handleSeeMovieClick() {
    history.push(`/movie/${movie.title}`);
    dispatch({ type: "SET_MOVIE_ID", value: movie.id });
    // setMovieID(movie.id);
    // setMoviePage(true);
  }

  return (
    <Card className="card" style={{ width: "22rem" }}>
      <Card.Img
        variant="top"
        src={IMG_URL_BASE + movie.poster_path}
        style={{ height: "500px" }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          <ReadMoreReact text={movie.overview} min={60} ideal={65} max={70} />
        </Card.Text>
        <Button variant="outline-success" onClick={handleSeeMovieClick}>
          See movie
        </Button>
      </Card.Body>
    </Card>
  );
}
