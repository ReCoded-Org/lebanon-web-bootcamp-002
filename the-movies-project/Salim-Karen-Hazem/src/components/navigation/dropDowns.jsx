import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { AppContext, useGenres } from "../../StateProvider";

function DropDowns() {
  const [state, dispatch] = useContext(AppContext);
  const genres = useGenres();

  const dropdowns = genres.map((genre) => {
    let style = {
      background: "white",
    };

    if (genre.id === state.genreId) {
      style.background = "red";
    }

    return (
      <Dropdown.Item
        id={genre.id}
        onClick={() => {
          dispatch({ type: "SET_GENRE", value: genre.id });
          dispatch({ type: "SET_SEARCH", value: "" });
        }}
        style={style}
      >
        {genre.name}
      </Dropdown.Item>
    );
  });

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Genres </Dropdown.Toggle>
      <Dropdown.Menu> {dropdowns} </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDowns;
