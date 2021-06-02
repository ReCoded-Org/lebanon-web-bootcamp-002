import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import React, { useState } from "react";

const Searchbar = ({ setShowSpinner, handleQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(() => {
      handleQuery(event.target.value)
      // return event.target.value;
    });
  };

  return (
    <Form
      inline
    >
      <Row>
        <Col xs={5} md={8} className="ml-3 px-0">
          <FormControl
            type="text"
            onChange = {handleChange}
            placeholder="Search"
            className="mr-sm-2"
          />
        </Col>
        <Col className="pl-sm-5 pl-md-0 ml-0 ">
          <Button
            onClick={(e) => {
              e.preventDefault()
              
              setShowSpinner(true);
            }}
            variant="outline-info"
            type="submit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Searchbar;
