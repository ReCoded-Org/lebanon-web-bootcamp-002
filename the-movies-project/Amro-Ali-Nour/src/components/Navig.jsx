import SearchBox from "./SearchBox";
import GenreKey from "./GenreKey";
import { Navbar } from "react-bootstrap";

function Navig(props) {
  return (
    <>
      <Navbar className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <GenreKey
          handleMovieSearch={props.handleMovieSearch}
          genres={props.genres}
          handleMovieGenre={props.handleMovieGenre}
        />
        <SearchBox handleMovieSearch={props.handleMovieSearch} />
      </Navbar>
    </>
  );
}
export default Navig;
