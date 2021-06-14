import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Badge, Row, Col, Image, Button } from "react-bootstrap";
import { AppContext } from "../../StateProvider";

//Movie Item Details Page

function MovieDetails() {
  let [movie, setMovie] = useState({});
  let [movieActors, setMovieActors] = useState([]);
  let [movieTrailer, setMovieTrailer] = useState([]);
  const [, dispatch] = useContext(AppContext);
  const { id } = useParams();
  const YT_EMBED = "https://www.youtube.com/embed/";

  //Setting the Movie:
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovie(json));
  }, [id]);

  //Setting Movie Trailer:
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovieTrailer(json["results"]));
  }, [id]);

  //Setting Movie Actors:
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovieActors(json.cast));
  }, [id]);

  useEffect(() => {
    dispatch({ type: "SET_CURRENT", value: id });
  }, [id]);

  return (
    <Container>
      <Button id='btn-link'>
        {" "}
        <Link to='/' id='btn-link'>
          {"<"} back
        </Link>
      </Button>

      <Row id='movieItemStyle' className='m-3 p-2'>
        <Col lg='4'>
          {movie.poster_path ? (
            <Image
              fluid
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              thumbnail
            />
          ) : (
            <p>No Photo</p>
          )}
        </Col>
        <Col lg='8' id='whiteText'>
          {" "}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <h5>IMDB Rating: {movie.vote_average}</h5>
          <h5>Release Date: {movie.release_date}</h5>
          {movie.genres &&
            movie.genres.map((genre, i) => (
              <Badge className='mr-2 badge'>{genre.name}</Badge>
            ))}
          {/* Actors - Display only first 3 items from array if the 
          person's role is acting and put the name in a list */}
          <h3>Actors</h3>
          <div className='scrollbar'>
            <Row lg={5} id='actorsRow' className='mx-2'>
              {movieActors &&
                movieActors.map((item) => {
                  if (
                    item.known_for_department === "Acting" &&
                    item.order < 10
                  ) {
                    return (
                      <Col>
                        <Link
                          to={"/person/" + item["id"]}
                          params={{ id: id }}
                          id='whiteText'
                        >
                          <img
                            src={
                              "https://image.tmdb.org/t/p/original/" +
                              item.profile_path
                            }
                            width='70%'
                            height='70%'
                            thumbnail
                          />
                          <p id='whiteText'>{item.original_name}</p>
                        </Link>
                      </Col>
                    );
                  }
                })}
            </Row>
          </div>
          {/* Trailer - Embed YouTube link into the webpage */}
          <h3>Trailer</h3>
          <Row className='m-3 p-2'>
            {movieTrailer &&
              movieTrailer.map((item) => {
                if (item.name.split(" ").includes("Official")) {
                  return (
                    <Col>
                      <h2>{item.name}</h2>
                      <iframe
                        width='100%'
                        height='100%'
                        src={YT_EMBED + item.key}
                        frameborder='0'
                        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                      ></iframe>
                    </Col>
                  );
                }
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default MovieDetails;
