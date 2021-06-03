import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function GenreKey(props) {
  const [genre, setGenre] = useState({ value: "" });
  // const path = "genre/movie/list";

  function handleSelect(event) {
    console.log(event);
    setGenre({ value: event });
  }
  // console.log(props.genres);
  useEffect(() => {
    props.handleMovieGenre(genre.value);
  }, [genre]);
  // props.movies

  return (
    <>
      <DropdownButton
        value={genre}
        onSelect={(e) => handleSelect(e)}
        variant="info"
        id="dropdown-item-button"
        title="Select Genre"
      >
        <Dropdown.Item eventKey="all">All Genres</Dropdown.Item>

        <Dropdown.Divider />
        {props.genres &&
          props.genres.map((Genre) => (
            <Dropdown.Item key={Genre.id} eventKey={Genre.id}>
              {" "}
              {Genre.name}
            </Dropdown.Item>
          ))}
      </DropdownButton>
    </>
  );
}

export default GenreKey;
