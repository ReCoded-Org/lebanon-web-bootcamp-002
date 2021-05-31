import { Dropdown } from "react-bootstrap";
import { useState } from "react";

export default function Genres() {
  const [genres, setGenres] = useState("");

  function fetchGenres() {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setGenres(json.genres);
      });
  }

  return (
    <Dropdown onClick={fetchGenres}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {genres &&
          genres.map((genre) => (
            <Dropdown.Item href="#/action-1">{genre.name}</Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
