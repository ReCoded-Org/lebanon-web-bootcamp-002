import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Movie Grid Item
function MovieItem(props) {
  const { id, title, poster_path, release_date, vote_average, genre_ids } =
    props.movie;

  return (
    <Card id="cardItem">
      <Link className="btn" to={"/movie/" + id}>
        <Card.Body>
          <Card.Title>
            <h4>{title}</h4>
          </Card.Title>
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + poster_path}
          />
          {poster_path ? <Image /> : <p>No Photo</p>}
          <Card.Text>
            <h5>IMDB Rating: {vote_average}</h5>
          </Card.Text>
          <Card.Text>
            {/* {movie.genres &&
              movie.genres.map((genre, i) => (
                <Badge className='mr-2 badge'>{genre.name}</Badge>
              ))} */}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default MovieItem;
