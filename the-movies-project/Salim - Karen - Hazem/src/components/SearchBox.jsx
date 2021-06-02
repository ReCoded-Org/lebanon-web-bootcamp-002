import React, { useState } from 'react'
import { Button, Nav, Form, Spinner } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SearchBox(props) {
  const [searchInput, setSearchInput] = useState('')
  const [isHidden, setIsHidden] = useState('hidden')
  const path = 'search/movie'

  function onSearch(e) {
    if (e.target.value !== '') {
      setIsHidden('visible')
    } else {
      setIsHidden('hidden')
    }
  }
  return (
    <Row>
      <Col className='mt-2 p-0' lg='1' md='1'>
        {' '}
        <Spinner
          animation='grow'
          variant='dark'
          style={{
            visibility: isHidden,
          }}
        />
      </Col>
      <Col lg='9' md='11'>
        <Form className='d-flex' inline>
          <Form.Control
            id='searchBox'
            type='search'
            placeholder='Search'
            aria-label='Search'
            value={searchInput}
            onChange={(e) => {
              onSearch(e)
              setSearchInput(e.target.value)
            }}
          />
          <Button
            variant='outline-primary'
            onClick={(e) => {
              props.function(path, searchInput, 0)
              setSearchInput('')
              setIsHidden('hidden')
            }}
          >
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default SearchBox
