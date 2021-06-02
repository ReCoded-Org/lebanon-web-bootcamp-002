import { Navbar, Nav } from "react-bootstrap";
import Search from "./search";

export default function NavbarHome(props) {
  return (
    <div className="Nav">
      <Navbar bg="light" expand="lg">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>

      <Search />
    </div>
  );
}
