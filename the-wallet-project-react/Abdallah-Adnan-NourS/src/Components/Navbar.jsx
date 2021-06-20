import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { StateContext } from "../StateProvider";
import WalletForm from "./WalletForm";

export default function NavB() {
  const [state, dispatch] = useContext(StateContext);
  const wallets = state.wallets;
  console.log(state);

  const handleNewWallet = (event) => {
    dispatch({ type: "SET_SHOW_MODAL", value: true });
  };

  return (
    <div className="nav">
      <h4>Wallet App</h4>
      {wallets.length > 0 && (
        <DropdownButton
          id="dropdown-basic-button"
          title={state.selectedWallet}
          variant="danger"
        >
          {wallets &&
            wallets.map((wallet) => (
              <Dropdown.Item
                onClick={(event) =>
                  dispatch({
                    type: "SET_SELECTED_WALLET",
                    value: event.target.innerText
                  })
                }
              >
                {wallet.title}
              </Dropdown.Item>
            ))}
          <Dropdown.Item onClick={handleNewWallet}>New Wallet +</Dropdown.Item>
        </DropdownButton>
      )}
    </div>
  );
}
