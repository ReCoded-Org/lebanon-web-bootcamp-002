import React, { useState } from 'react'
import { Button, Navbar, Nav, Form, Dropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import genres from './genres'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Navigation(props) {
  const dropdowns = genres.map((genre) => {
    let path = 'movie/popular'
    return (
      <Dropdown.Item
        id={genre.id}
        onClick={() => props.function(path, '', genre.id)}
      >
        {genre.name}
      </Dropdown.Item>
    )
  })

  return (
    <Container className='mt-3'>
      <Row xs sm md lg={3}>
        <Col lg='3'>
          <Dropdown>
            <Dropdown.Toggle variant='primary' id='dropdown-basic'>
              Genres{' '}
            </Dropdown.Toggle>{' '}
            <Dropdown.Menu> {dropdowns} </Dropdown.Menu>{' '}
          </Dropdown>{' '}
        </Col>{' '}
        <Col lg='4'>
          <h1>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              class='bi bi-film'
              viewBox='0 0 16 16'
            >
              <path d='M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z' />
            </svg>{' '}
            سينما الجواهر
          </h1>{' '}
        </Col>{' '}
        <Col lg='5'>
          <SearchBox function={props.function} />{' '}
        </Col>{' '}
      </Row>
    </Container>
  )
}

export default Navigation
