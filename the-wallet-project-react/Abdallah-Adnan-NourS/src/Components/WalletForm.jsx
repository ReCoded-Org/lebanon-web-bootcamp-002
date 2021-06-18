import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { StateContext } from "../StateProvider";

export default function WalletForm({ setShowError }) {
  const [state, dispatch] = useContext(StateContext);
  const showModal = state.showModal;

  const [wallet, setWallet] = useState({
    title: "",
    transactions: [],
    balance: 0,
    currency: "",
    description: ""
  });

  const handleCurrency = (event) => {
    setWallet((prevWallet) => {
      return { ...prevWallet, currency: event.target.value };
    });
  };

  const handleClose = () => {
    dispatch({ type: "SET_SHOW_MODAL", value: false });
  };

  const handleSaveWallet = () => {
    console.log(state.wallets);
    dispatch({ type: "SET_WALLET", value: wallet });
    dispatch({ type: "SET_SELECTED_WALLET", value: wallet.title });
    dispatch({ type: "SET_SHOW_MODAL", value: false });
    console.log(state.wallets);
    setShowError(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      {/* <Modal.Dialog show={showModal} onHide={handleClose}> */}
      <Modal.Header>
        <Modal.Title>Create wallet</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="">
          <label for="name-input" class="new-wallet-input">
            Name
          </label>
          <div>
            <input
              type="text"
              class="form-control"
              id="wallet-name-input"
              value={wallet.title}
              onChange={(event) => {
                setWallet((prevWallet) => {
                  return { ...prevWallet, title: event.target.value };
                });
              }}
            />
          </div>
        </div>
        <div>
          <label for="currency-input" class="new-wallet-input">
            Currency
          </label>
          <div>
            <div>
              <input
                type="radio"
                id="currency-usd"
                value="usd"
                class="usd"
                name="currency"
                onChange={handleCurrency}
              />
              <label class="usd" for="currency-usd">
                US Dollars ($)
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="currency-ll"
                class="ll"
                value="L.L."
                name="currency"
                onChange={handleCurrency}
              />
              <label class="ll" for="currency-kl">
                Libanese Lira (L.L.)
              </label>
            </div>
          </div>
        </div>
        <div>
          <label for="wallet-balance-input" class="new-wallet-input">
            Balance
          </label>
          <div class="">
            <input
              type="number"
              class=""
              id="wallet-balance-input"
              value={wallet.balance}
              onChange={(event) => {
                setWallet((prevWallet) => {
                  return { ...prevWallet, balance: event.target.value };
                });
              }}
            />
          </div>
        </div>
        <div class="">
          <label for="wallet-desription-input" class="new-wallet-input">
            Description
          </label>
          <div class="">
            <input
              type="text"
              class=""
              id="wallet-description-input"
              value={wallet.description}
              onChange={(event) => {
                setWallet((prevWallet) => {
                  return { ...prevWallet, description: event.target.value };
                });
              }}
            />
          </div>
          <br />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveWallet}>
          Save changes
        </Button>
      </Modal.Footer>
      {/* </Modal.Dialog> */}
    </Modal>
  );
}
