import SearchBox from "./SearchBox";
import { Navbar } from "react-bootstrap";


function Navig() {
  return (
    <>
      <Navbar className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <SearchBox />
      </Navbar>
    </>
  );
}
export default Navig;
