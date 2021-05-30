import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
 
} from "react-bootstrap";
import Search from "./searchbox";

export default function navbar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" id="title">
          Movies Guide
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drama</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
            </NavDropdown>
          </Nav>

         
            <Search onChange={this.handleShow} />
           
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
