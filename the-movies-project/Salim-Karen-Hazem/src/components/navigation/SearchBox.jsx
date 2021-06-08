import React, { useState, useContext } from "react";
import { Button, Form, Spinner, Row, Col } from "react-bootstrap";
import { AppContext, useMovies } from "../../StateProvider";

//variables
const path = "search/movie";

function SearchBox(props) {
  const [searchInput, setSearchInput] = useState("");
  const [isHidden, setIsHidden] = useState("hidden");
  const [state, dispatch] = useContext(AppContext);
  const movies = useMovies(path, searchInput, 0);

  function onSearch(e) {
    if (e.target.value !== "") {
      setIsHidden("visible");
    } else {
      setIsHidden("hidden");
    }
  }
  return (
    <Row>
      <Col className="mt-2 p-0" lg="1" md="1">
        {" "}
        <Spinner
          animation="grow"
          variant="dark"
          style={{
            visibility: isHidden,
          }}
        />
      </Col>
      <Col lg="9" md="11">
        <Form className="d-flex" inline>
          <Form.Control
            id="searchBox"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => {
              onSearch(e);
              setSearchInput(e.target.value);
            }}
          />
          <Button
            id="btn-link"
            onClick={(e) => {
              dispatch({
                type: "SET_MOVIES",
                value: movies,
              });
              setSearchInput("");
              setIsHidden("hidden");
            }}
          >
            Search
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default SearchBox;
