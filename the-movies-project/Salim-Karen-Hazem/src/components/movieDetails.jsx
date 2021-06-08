import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Link, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import genres from "./genres";
import Button from "react-bootstrap/Button";

//Movie Item Details Page

function MovieDetails() {
  let [movie, setMovie] = useState({});
  let [movieActors, setMovieActors] = useState([]);
  let [movieTrailer, setMovieTrailer] = useState([]);
  const IMDB_API = "k_kq2owrli";
  const { id } = useParams();
  const YT_LINK = "https://www.youtube.com/watch?v=";
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
  }, []);

  //Setting Movie Trailer:
  // https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/videos?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovieTrailer(json["results"]));
  }, []);

  //Setting Movie Actors:
  // https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=*
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=8f1f011d080e1565511d99335cb48312"
    )
      .then((response) => response.json())
      .then((json) => setMovieActors(json.cast));
  }, []);
  console.log(movieTrailer);

  return (
    <div>
      <Button variant='outline-primary'>
        {" "}
        <Link to='/'>{"<"} back</Link>
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
        <Col lg='8'>
          {" "}
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <h5>IMDB Rating: {movie.vote_average}</h5>
          <h5>Release Date: {movie.release_date}</h5>
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
                        <img
                          src={
                            "https://image.tmdb.org/t/p/original/" +
                            item.profile_path
                          }
                          width='70%'
                          height='70%'
                          thumbnail
                        />
                        <p>{item.original_name}</p>
                      </Col>
                    );
                  }
                })}
            </Row>
          </div>
          {/* Trailer - Embed YouTube link into the webpage */}
          <h3>Trailer</h3>
          <Row className='m-3 p-2' lg={1}>
            {movieTrailer &&
              movieTrailer.map((item) => {
                if (item.name === "Official Trailer") {
                  return (
                    <Col>
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
    </div>
  );
}
export default MovieDetails;
