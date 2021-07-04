import React, { useContext, useState, useEffect, useRef } from "react";
import { WalletContext } from "../StateProvider";
import "../Custom.css";
import { useParams } from "react-router-dom";
import Transaction from "./Transaction";
import {
  Container,
  ButtonGroup,
  InputGroup,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function WalletJ() {
  let id = useParams().name;
  const [state, dispatch] = useContext(WalletContext);
  const [type, setType] = useState("");
  const [currentWallet, setCurrentWallet] = useState([]);
  const amount = useRef(null);
  const tags = useRef(null);
  const notes = useRef(null);
  useEffect(() => {
    setCurrentWallet(
      state.wallets.find((wallet) => wallet.id === parseInt(id, 10))
    );
  }, [state, id]);
  let balance = parseInt(currentWallet.balance, 10);

  function calc() {
    state.wallets
      .find((wallet) => wallet.id == id)
      .transactions.forEach((tran) => {
        console.log(tran);
        let parsed = parseInt(tran.amount, 10);
        if (tran.type === "income") {
          balance += parsed;
        }

        if (tran.type === "expense") {
          balance -= parsed;
        }
      });
    let balanceOb = {
      total: balance,
      id: currentWallet.id,
    };
    return balance;
  }
  return (
    <>
      <h2
        className="display-4 ms-3 my-0 py-0 text-center"
        style={{ fontWeight: "450" }}>
        {currentWallet.name}
      </h2>
      <Container
        Fluid
        className="d-flex mt-3  flex-wrap justify-content-center">
        <Col
          sm={5}
          className="mt-1 shadow d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url(
          "https://img.wallpapersafari.com/desktop/1920/1080/50/79/HvWjc8.png"
        )`,
            flexDirection: "column",
            borderRadius: "15px",
            minHeight: "20vh",
          }}>
          <p className="lead text-white text-center fw-bold"> Wallet Balance</p>
          <h4 className="display-6 text-white text-center fw-bolder d-flex">
            {calc()}
            <span>{currentWallet.currency}</span>
          </h4>
          <p className="lead text-white fw-bolder">
            {currentWallet.description}
          </p>
        </Col>
        <Col
          className="ms-3 shadow-sm d-flex "
          style={{
            borderRadius: "15px",
            flexDirection: "column",
          }}>
          <Form
            onSubmit={(e) => {
              let transactionob = {
                amount: amount.current.value,
                tags: tags.current.value,
                notes: notes.current.value,
                type: type,
                id: id,
              };
              dispatch({
                type: "SET_TRANSACTIONS",
                transaction: transactionob,
              });
              e.preventDefault();
            }}>
            <h6
              style={{ fontSize: "1.75rem", fontWeight: "450" }}
              className="display-6 mb-3 text-center">
              Add Transaction
            </h6>
            <Form.Group as={Row} className="d-flex align-items-center">
              <Col>
                <Form.Label
                  style={{ fontWeight: "500" }}
                  className="lead ms-1"
                  htmlFor="inlineFormInputGroup">
                  Amount
                </Form.Label>
              </Col>
              <Col sm={10}>
                <InputGroup>
                  <InputGroup.Text>{currentWallet.currency}</InputGroup.Text>
                  <Form.Control
                    ref={amount}
                    style={{
                      maxWidth: "45%",
                      border: "none",
                      focus: "none",
                      outline: "none",
                    }}
                    className="ms-2"
                    id="inlineFormInputGroup"
                    type="number"
                    placeholder="Enter transaction amount"
                  />
                </InputGroup>
              </Col>
            </Form.Group>
            <hr
              className="my-2"
              style={{ color: "blue", opacity: "0.1", width: "100%" }}
            />
            <Form.Group className="d-flex">
              <Col>
                <Form.Label
                  style={{ fontWeight: "500" }}
                  className="lead ms-1"
                  htmlFor="inlineFormInputGroup">
                  Tags
                </Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  ref={tags}
                  style={{ maxWidth: "65%", focus: "none", outline: "none" }}
                  className="ms-2"
                  id="inlineFormInputGroup"
                  plaintext
                  placeholder="Enter tags seperated by commas"
                />
              </Col>
            </Form.Group>
            <hr className="my-2" style={{ color: "blue", opacity: "0.1" }} />
            <Form.Group className="d-flex">
              <Col>
                <Form.Label
                  style={{ fontWeight: "500" }}
                  className="lead ms-1"
                  htmlFor="inlineFormInputGroup">
                  Notes
                </Form.Label>
              </Col>
              <Col sm={10}>
                <Form.Control
                  ref={notes}
                  as="textarea"
                  style={{ maxWidth: "65%", focus: "none", outline: "none" }}
                  className="ms-2"
                  id="inlineFormInputGroup"
                  placeholder="Enter tags seperated by commas"
                />
              </Col>
            </Form.Group>
            <hr className="my-2" style={{ color: "blue", opacity: "0.1" }} />
            <Form.Group>
              <Col className="text-center">
                <ButtonGroup className="my-1">
                  <Button
                    onClick={() => {
                      setType("income");
                    }}
                    className="py-0 px-0 me-5"
                    variant="success"
                    style={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "50%",
                      textAlign: "center",
                      verticalAlign: "center",
                    }}>
                    +
                  </Button>
                  <Button
                    onClick={() => {
                      setType("expense");
                    }}
                    className="px-0 py-0 mx-0 my-0"
                    variant="danger"
                    style={{
                      outline: "none",
                      focus: "none",
                      height: "32px",
                      width: "32px",
                      borderRadius: "50%",
                      textAlign: "center",
                      verticalAlign: "center",
                    }}>
                    -
                  </Button>
                </ButtonGroup>
              </Col>
            </Form.Group>
            <Col className="text-end me-2 mb-2">
              <Button type="submit" variant="primary">
                Add Transaction
              </Button>
            </Col>
          </Form>
        </Col>
      </Container>
      <Container>
        <Transaction currentWallet={currentWallet} />
      </Container>
    </>
  );
}

export default WalletJ;
