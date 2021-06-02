//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav } from 'react-bootstrap';
import React from 'react';
import SearchBox from './SearchBox.js';
import Spinnerr from './Spinner.js';
import '../App.css';
export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="true">
          <Navbar.Brand href="#home">Movies Night</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
         
         
         <SearchBox />

        </Navbar>

    );
}
