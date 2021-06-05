import React, { useState } from "react";

import { Button, Form, FormControl, Spinner } from "react-bootstrap";

function SearchBox(props) {
  const [state, setState] = useState(["", false]);

  function handleSubmit(event) {
    event.preventDefault();
    if (state[0]) props.handleMovieSearch(state[0]);
  }

  function handleChange(event) {
    // if (event.target.value) {
    //   console.log(event.target.value);
    // } else {
    //   event.target.value = null;
    // }
    setState((prev) => {
      return [event.target.value, true];
    });
  }
  //  hello guys I am back
  function handleKey(event) {
    setTimeout(
      () =>
        setState((prev) => {
          return [prev[0], false];
        }),
      250
    );
  }

  return (
    <div className="navDiv">
      {state[1] ? (
        <Spinner className="spinner" animation="border" variant="info" />
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit} onKeyUp={handleKey} inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit} variant="outline-info">
          Search
        </Button>
      </Form>
    </div>
  );
}
export default SearchBox;
