import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Actor from "./Actor";
const MoviePage = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [actors, setActors] = useState([]);
  let movieId = useParams().title;
  const base_img_url = "https://image.tmdb.org/t/p/w500";
  let poster_path = base_img_url + movieInfo.poster_path;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=78d25a5f3730fb9c31adbb75ca051bf6&language=en-US`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovieInfo(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=78d25a5f3730fb9c31adbb75ca051bf6`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovieTrailer(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=78d25a5f3730fb9c31adbb75ca051bf6`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setActors(data);
      });
  }, []);

  return (
    <Container fluid className="ml-md-2 mt-4 mb-2">
      <Row className="d-flex justify-content-between">
        <h2 className="display-3">{movieInfo.original_title}</h2>
      </Row>
      <Row>
        <Col className="ml-0 ml-md-2 p-0">
          <img
            style={{ height: "60vh", borderRadius: "6%" }}
            className="shadow-sm z-depth-1-half"
            src={poster_path}
          />
        </Col>
        <Col className="lead p-0" md={9}>
          <h2 id="ovtitle" className="lead fs-2 custom">
            Overview:
          </h2>
          <p className="mt-2 mt-md-0">{movieInfo.overview}</p>
          <h4 id="release" className="lead">
            Released: <span className="lead">{movieInfo.release_date}</span>
          </h4>
          {movieInfo.genres &&
            movieInfo.genres.map((genre, i) => (
              <Badge className="mr-2" key={`${i}`} variant="info">
                {genre.name}
              </Badge>
            ))}
          <Badge variant="warning">Rating: {movieInfo.vote_average}</Badge>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col className="justify-content-center align-items-center mx-auto col-9 col-md-7">
          <h4 id="trailerTitle" className="display-4 text-center mb-2">
            Trailer
          </h4>
          <div className="embed-responsive embed-responsive-16by9">
            {movieTrailer.results && (
              <iframe
                className="embed-responsive-item"
                src={`https://www.youtube.com/embed/${movieTrailer.results[0].key}`}
                allowFullScreen></iframe>
            )}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <h3 className="display-4">Cast:</h3>
        <ul
          style={{
            listStyle: "none",
            flexWrap: "wrap",
          }}
          className="d-flex pl-0">
          {actors.cast &&
            actors.cast.map((actor, i) => (
              <Link to={`/person/${actor.id}`}>
                <ul
                  className="d-flex justify-content-around align-items-center"
                  style={{ width: "15vw", listStyle: "none" }}>
                  <Actor key={`${i}`} actor={actor} />
                </ul>
              </Link>
            ))}
        </ul>
      </Row>
    </Container>
  );
};

export default MoviePage;
