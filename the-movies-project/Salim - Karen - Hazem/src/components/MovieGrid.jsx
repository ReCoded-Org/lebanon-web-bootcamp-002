import React from 'react'
import MovieItem from './movieItem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MovieGrid(props) {
  const movies = props.movies
  return (
    <Container className='mt-4'>
      <Row xs={1} md={2} lg={3}>
        {movies.map((movie) => {
          return (
            <Col>
              <MovieItem movie={movie} />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default MovieGrid
