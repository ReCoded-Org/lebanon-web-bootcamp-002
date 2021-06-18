import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import * as uuid from "uuid";
import { StateContext } from "../context/StateContext";

export default function Nav() {
  // const handleWallet = (wallet) => {
  //   setActive(wallet);
  // };
  const { wallets } = useContext(StateContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/"> Wallet App</Navbar.Brand>
          {wallets.length && (
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              {wallets.map((wallet) => (
                <NavDropdown.Item
                  // onClick={(wallet) => handleWallet(wallet)}
                  key={uuid.v4()}
                  // to="/walletForm"
                >
                  <Link to={`/walletForm/${wallet.id}`}> {wallet.name}</Link>
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />

              <NavDropdown.Item to="/modal">
                <Link to="/modal">Creat new wallet </Link>
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Container>
      </Navbar>
    </>
  );
}
