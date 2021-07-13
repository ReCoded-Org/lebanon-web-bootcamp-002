import React from "react";
import { Button, Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function NoWallet() {
  return (
    <Container fluid>
      <Row>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="146"
          height="146"
          fill="currentColor"
          className="bi mt-5 bi-wallet2"
          viewBox="0 0 16 16">
          <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
        </svg>
        <h3 className="display-5 text-center fw-normal">Welcome!</h3>
        <p className="fs-4 text-center lead" id="NoWalletsText">
          You have no Wallets... start by creating one
        </p>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Link to="/walletform">
            <Button variant="danger" className="rounded-pill mx-auto">
              Create Wallet
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default NoWallet;
