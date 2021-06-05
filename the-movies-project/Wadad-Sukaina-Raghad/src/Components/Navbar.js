//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import React, { useState } from "react";
import SearchBox from "./SearchBox.js";
import DropdownCategories from "./Dropdown.js";
import "../App.css";
export default function NavBar(props) {
  const [category, setCategory] = useState({});
  const api_key = "80028c9c6bbc4592fab0a17f612e8b3a";

  /*
  const constructGenre = (id) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=${id}`;
  };
*/
  const changeCategory = (category) => {
    //setIsLoading(true);
    setCategory(category);
  };
  /* const renderCategories = (id) => {
    fetch(constructGenre(id))
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.results);
        console.log(id);
        //setMovies(data.results);
        changeCategory();
      })
      .catch((err) => {
        console.log(err);
      });
  };
*/
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="true">
      <Navbar.Brand href="#home">Movies Night</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>

      <DropdownCategories
        category={category}
        setCategory={changeCategory}
        renderCategories={props.renderCategories}
      />

      <SearchBox function={props.function} />
    </Navbar>
  );
}
