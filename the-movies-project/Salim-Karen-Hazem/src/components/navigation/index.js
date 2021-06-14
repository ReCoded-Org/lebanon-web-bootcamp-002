import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppContext } from "../../StateProvider";
import DropDowns from "./dropDowns";
import SearchBox from "./searchBox";
import WatchList from "./watchList";

function Navigation() {
  const [, dispatch] = useContext(AppContext);

  function goToMain() {
    dispatch({ type: "SET_GENRE", value: 0 });
    dispatch({ type: "SET_SEARCH", value: "" });
  }

  return (
    <Row xs sm md lg={4} className='m-3'>
      <Col lg='2' md='5' xs='4'>
        <Link to='/' onClick={goToMain} style={{ textDecoration: "none" }}>
          <h1 className='blink'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              class='bi bi-film'
              viewBox='0 0 16 16'
            >
              <path d='M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z' />
            </svg>{" "}
            NEON
          </h1>{" "}
        </Link>
      </Col>
      <Col lg='2'></Col>
      <Col lg='8' md='3' xs='3'>
        <Row className=''>
          <Col lg='1'></Col>
          <Col lg='2' className='mt-2'>
            {" "}
            <DropDowns />
          </Col>
          <Col lg='2' className='mt-2'>
            <WatchList />
          </Col>

          <Col lg='7' className='mt-2'>
            <SearchBox />{" "}
          </Col>
        </Row>
      </Col>{" "}
    </Row>
  );
}

export default Navigation;
