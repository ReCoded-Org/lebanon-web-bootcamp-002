import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { AppContext } from "../../StateProvider";

function WatchList() {
  const [state, dispatch] = useContext(AppContext);
  const { movies, genreId, watchList } = state;

  function removeMovie(id) {
    const newWatchList = watchList.filter((movie) => movie.id !== id);
    dispatch({ type: "SET_WATCH", value: newWatchList });
  }

  const dropdowns = watchList.map((movie) => {
    const id = movie.id;
    return (
      <div>
        <Link className='btn' to={"/movie/" + id}>
          <Dropdown.Item id={id}>{movie.title}</Dropdown.Item>
        </Link>
        <button className='btn' onClick={() => removeMovie(id)}>
          X
        </button>
      </div>
    );
  });

  return (
    <Dropdown>
      <Dropdown.Toggle id='dropdown-basic'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-bookmark-plus'
          viewBox='0 0 16 16'
        >
          <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
          <path d='M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z' />
        </svg>{" "}
        WatchList
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdowns.length === 0 ? "No items" : dropdowns}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default WatchList;
