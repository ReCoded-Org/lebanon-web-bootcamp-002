import { Dropdown } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { StateContext } from "./StateProvider";

export default function Genres() {
  const [state, dispatch] = useContext(StateContext);
  const [genres, setGenres] = useState("");
  const [category, setCategory] = useState("Genres");
  //https://api.themoviedb.org/3/discover/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&with_genres=53
  function handleChange(event) {
    setCategory(event.target.text);
    const CategoryId = genres.find((item) => item.name === event.target.text)
      .id;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&with_genres=${CategoryId}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "SET_MOVIES_DATA", value: json });
        // setMoviesData(json);
      });
  }

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setGenres(json.genres);
      });
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {category}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {genres &&
          genres.map((genre) => (
            <Dropdown.Item key={genre.name} onClick={handleChange}>
              {genre.name}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
