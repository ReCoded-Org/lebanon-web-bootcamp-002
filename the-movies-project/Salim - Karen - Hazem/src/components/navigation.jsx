import React, { useState } from "react";
import Spin from "./spinner";
import { Button, Navbar, Nav, Form } from "react-bootstrap";

function Navigation() {
  let [searchInput, setSearchInput] = useState("");
  let [isHidden, setIsHidden] = useState("none");
  const changeSpin = (e) => {
    setIsHidden(() => {
      if (e.target.value === "") {
        return "none";
      } else {
        return "inline";
      }
    });
  };

  return (
    <Navbar className="bg-light p-2">
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="mr-auto ">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Spin display={isHidden} />
        <Form className="d-flex" inline>
          <Form.Control
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            // onSearch = {()=> changeSpin()}
            onChange={(e) => {
              setSearchInput(e.target.value);
              changeSpin(e);
              setTimeout(() => setIsHidden("none"), 5000);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                console.log(searchInput);
              }
            }}
          />
          <Button
            variant="outline-success"
            onClick={() => console.log(searchInput)}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
