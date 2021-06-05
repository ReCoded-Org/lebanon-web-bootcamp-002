import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";

//import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Genres() {
  const [genres, setGenres] = useState("");

  const fetchGenres = () => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=c804f8530c2990b932ec85cdb5fc2b0b&language=en-US";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setGenres(json.genres);
        // console.log(json);
      });
  };
  /*useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);*/
  return (
    <Dropdown onClick={fetchGenres}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {genres &&
          genres.map((genre) => (
            <Dropdown.Item id={genre.name} key={genre.id}>
              {genre.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
