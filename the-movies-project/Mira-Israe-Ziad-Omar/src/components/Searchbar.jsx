import {Button, Row, Col, Form, FormControl } from "react-bootstrap";
import React, { useState } from "react";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(() => {
      console.log(searchTerm);
      return event.target.value;
    });
  };

  return (
    <Form inline>
          <Row>
            <Col xs={5} md={8} className ="ml-3 px-0">
              <FormControl onChange = { handleChange } type="text" placeholder="Search" className="mr-sm-2" />
            </Col>
            <Col className="pl-sm-5 pl-md-0 ml-0 ">
              <Button variant="outline-info">Search</Button>
            </Col>
          </Row>
    </Form>
  );
};

export default Searchbar;
