import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { WalletContext } from "../StateProvider";
import { Link } from "react-router-dom";
const Navi = () => {
  const [state] = useContext(WalletContext);
  console.log(state);
  return (
    <Navbar bg="dark" className="px-0">
      <Navbar.Brand
        className=" px-3 mx-0 text-white font-weight-bolder"
        href="#">
        Wallet
      </Navbar.Brand>
      <Nav>
        {state.wallets.length != 0 && (
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            {state.wallets.map((wallet) => (
              <Link to={`/wallet/${wallet.id}`}>
                <NavDropdown.Item as="button">{wallet.name}</NavDropdown.Item>
              </Link>
            ))}
            <NavDropdown.Item>
              <Link to="/walletform">
                <Button variant="danger" className="rounded-pill mx-auto">
                  Create Wallet
                </Button>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navi;
