import React, { useContext } from "react";
import MovieItem from "./movieItem";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext, useMovies } from "../../StateProvider";

const genrePath = "discover/movie";

function MovieGrid(props) {
  const [state] = useContext(AppContext);
  let { movies, genreId } = state;
  movies = useMovies(genrePath, "", genreId);

  return (
    <Container>
      {console.log(movies)}
      <Row xs={1} md={2} lg={4}>
        {movies.map((movie) => {
          return (
            <Col className="mb-2">
              <MovieItem movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MovieGrid;
