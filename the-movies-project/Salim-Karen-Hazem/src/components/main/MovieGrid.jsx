import React, { useContext } from "react";
import MovieItem from "./movieItem";
import { Container, Row, Col } from "react-bootstrap";
import { AppContext, useMovies } from "../../StateProvider";

function MovieGrid() {
  const [state] = useContext(AppContext);
  let { movies, genreId, searchInput } = state;
  movies = useMovies(searchInput, genreId);

  return (
    <Container>
      {searchInput !== "" && (
        <Row>
          <h3>Search Result for "{searchInput}":</h3>
        </Row>
      )}
      <Row xs={1} md={2} lg={4}>
        {movies.map((movie) => {
          return (
            <Col className='mb-2'>
              <MovieItem movie={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MovieGrid;
