import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";

function SearchBox() {
  const [state, setState] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (state) {
      console.log(state);
    }
  }

  function handleChange(event) {
    if (event.target.value) {
      console.log(event.target.value);
    }
    setState(() => {
      return event.target.value;
    });
  }

  return (
    <Form onSubmit={handleSubmit} inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={handleChange}
      />
      <Button type="button" variant="outline-info">
        Search
      </Button>
    </Form>
  );
}
export default SearchBox;
