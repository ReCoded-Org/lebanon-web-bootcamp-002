import React, { useState, useContext } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { WalletContext } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";

function LightBox() {
  let history = useHistory();
  const [show, setShow] = useState(true);
  const [state, dispatch] = useContext(WalletContext);
  const handleClose = (event) => {
    setShow(false);
  };
  return (
    <div className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
          <Button variant="danger" onClick={handleClose}>
            X Close
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              let walletob = {
                name: e.target.name.value,
                balance: e.target.balance.value,
                description: e.target.description.value,
                currency: e.target.currency.value,
                transactions: [],
                id: Math.floor(new Date() / 1000),
              };
              dispatch({
                type: "SET_WALLET",
                wallet: walletob,
              });

              history.push(`/wallet/${walletob.id}`);
              e.preventDefault();
            }}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Wallet Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Wallet Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="currency">
              <Form.Label>Currency</Form.Label>
              <Form.Check
                controlId="currencyD"
                type="radio"
                name="radio"
                value="$"
                label="Dollar ($)"
              />
              <Form.Check
                controlId="currencyL"
                type="radio"
                name="radio"
                value="LBP"
                label="Lebanese Lira (LBP)"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="balance">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Balance"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Description"
                required
              />
            </Form.Group>
            <Button style={{ width: "100%" }} type="submit" variant="success">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LightBox;
