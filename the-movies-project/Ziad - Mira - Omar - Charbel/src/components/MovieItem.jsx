import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieItem = ({ movie }) => {
  const base_img_url = "https://image.tmdb.org/t/p/w500";
  let poster_path = base_img_url + movie.poster_path;

  return (
    <li className="mt-3 ml-3 shadow-sm" style={{ border: "none" }}>
      <Link to={`/moviepage/${movie.id}`}>
        <Card style={{ width: "18rem", height: "37rem" }}>
          <Card.Img variant="top" src={poster_path} />
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>
              <Badge variant="warning">Rating {movie.vote_average}</Badge>
            </Card.Text>
            <Card.Text>
              <Badge variant="info">{movie.release_date}</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </li>
  );
};

export default MovieItem;
