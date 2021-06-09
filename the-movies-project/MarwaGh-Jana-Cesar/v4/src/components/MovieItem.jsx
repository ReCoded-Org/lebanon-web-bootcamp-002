import { Card, Button } from "react-bootstrap";
import ReadMoreReact from "read-more-react";
import { useHistory } from "react-router-dom";
import React from "react";

//
import { Link } from "react-router-dom";
//

const MovieItem = ({ movie }) => {
  const IMG_URL_BASE = "https://image.tmdb.org/t/p/original";
  const history = useHistory();
  //console.log(history);

  const handleClick = () => {
    history.push("movie/" + movie.id);
  };

  //movieTitle={movie["original_title"]}
  // movieDescription={movie.overview}
  // movieImg={IMG_URL_BASE + movie.poster_path}
  return (
    <div>
      {
        <Link to={`/MoviePage/${movie.id}`}>
          <Card className="card" style={{ width: "22rem" }}>
            <Card.Img
              variant="top"
              src={IMG_URL_BASE + movie.poster_path}
              style={{ height: "500px" }}
            />
            <Card.Body>
              <Card.Title>{movie["original_title"]}</Card.Title>
              <Card.Text>
                <ReadMoreReact
                  text={movie.overview}
                  min={60}
                  ideal={65}
                  max={70}
                />
              </Card.Text>

              <Button
                variant="outline-success"
                onClick={(e) => handleClick(movie)}
              >
                See movie
              </Button>
            </Card.Body>
          </Card>
        </Link>
      }
    </div>
  );
};

export default MovieItem;
