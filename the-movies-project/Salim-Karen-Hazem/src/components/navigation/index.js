import React, { useContext } from "react";
import { Button, Dropdown, Container, Row, Col } from "react-bootstrap";
import { AppContext, useMovies, useGenres } from "../../StateProvider";
import SearchBox from "./SearchBox";

//variables
let popularPath = "movie/popular";

function Navigation() {
  const [state, dispatch] = useContext(AppContext);
  const { movies } = useMovies(popularPath, "", 0);
  const genres = useGenres();

  const dropdowns = genres.map((genre) => {
    return (
      <Dropdown.Item
        id={genre.id}
        onClick={() => {
          dispatch({ type: "SET_GENRE", value: genre.id });
          dispatch({ type: "SET_MOVIES", value: movies });
        }}
      >
        {genre.name}
      </Dropdown.Item>
    );
  });

  return (
    <Container className="mt-3">
      <Row xs sm md lg={3} className="m-3">
        <Col lg="4" md="3" xs="3" className="mt-2">
          <Row>
            <Col lg="4">
              {" "}
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">Genres </Dropdown.Toggle>{" "}
                <Dropdown.Menu> {dropdowns} </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col lg="8">
              <Button id="wishlist-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z" />
                </svg>{" "}
                WatchList
              </Button>
            </Col>
          </Row>
        </Col>{" "}
        <Col lg="4" md="5" xs="4">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-film"
              viewBox="0 0 16 16"
            >
              <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
            </svg>{" "}
            Cinema Magic
          </h1>{" "}
        </Col>{" "}
        <Col lg="4" md="4" xs="5" className="mt-2">
          <SearchBox />{" "}
        </Col>{" "}
      </Row>
    </Container>
  );
}

export default Navigation;
