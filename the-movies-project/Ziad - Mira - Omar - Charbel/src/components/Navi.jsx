import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";
import Genre from "./Genre";
import "../Custom.css";

const Navi = ({
  setSearchTerm,
  searchTerm,

  setGenre,
  genre,
  setGenreId,
}) => {
  return (
    <Navbar bg="dark" className="px-0">
      <Container fluid className="mx-0 px-0">
        <Navbar.Brand
          className=" px-3 mx-0 text-white font-weight-bolder"
          href="#">
          Movies
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link as="p" className="text-white font-size-4 mb-0">
                Home
              </Nav.Link>
            </Link>
            <NavDropdown
              onSelect={(e) => {
                setGenreId(e);
              }}
              className="Custom text-white"
              title="Genre"
              id="collasible-nav-dropdown">
              <Genre
                setGenre={setGenre}
                setGenreId={setGenreId}
                genre={genre}
              />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      </Container>
    </Navbar>
  );
};

export default Navi;
