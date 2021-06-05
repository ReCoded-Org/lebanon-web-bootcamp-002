import { Form, FormControl, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Spinnerr from "./Spinner.js";
import ConstructUrl from "./componentURL.js";

export default function SearchBox(props) {
  const [input, setInput] = useState("");
  const [showHide, setShowHide] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
    setShowHide((prevState) => !prevState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    console.log(props.function(input, "search/movie"));
    props.function(input, "search/movie");
  }
  return (
    <>
      <span>{showHide && <Spinnerr />}</span>
      <Form inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder="Search movies here"
          className="mr-sm-2 Cursor"
          onChange={handleChange}
        />

        <Button variant="outline-info">GO!</Button>
      </Form>
    </>
  );
}
