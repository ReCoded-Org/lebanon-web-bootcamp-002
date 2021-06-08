import React from "react";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";

// Movie Grid Item
function MovieItem(props) {
  const { id, title, poster_path, release_date, vote_average, genre_ids } =
    props.movie;

  return (
    
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img
            variant='top'
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
          />
          {poster_path ? <Image /> : <p>No Photo</p>}
          <Card.Text>Release Date: {release_date}</Card.Text>
          <Card.Text>IMDB Rating: {vote_average}</Card.Text>
        </Card.Body>
        <Link className='btn btn-primary m-2' to={"/movie/" + id}>
          more details
        </Link>
      </Card>
    
  );
}

export default MovieItem;
