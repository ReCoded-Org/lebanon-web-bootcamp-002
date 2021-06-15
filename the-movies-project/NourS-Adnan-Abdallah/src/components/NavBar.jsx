import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { StateContext } from "./StateProvider";
import { Link, useHistory, Route } from "react-router-dom";
import SearchBox from "./SearchBox";
import Genres from "./Genres";
// import Main from "./Main";
const NavBar = function ({ handleMovies, setMoviesData }) {
  const history = useHistory();
  const [state, dispatch] = useContext(StateContext);
  return (
    <Navbar bg="light" expand="lg" id="Nav">
      <Navbar.Brand>
        <strong>
          <em>Movies</em>
        </strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Genres />
        <div id="search-space"></div>
        <SearchBox handleMovies={handleMovies} id="search-box" />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
