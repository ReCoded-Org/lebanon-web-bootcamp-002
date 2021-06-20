import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { StateContext } from "../StateProvider";
import WalletForm from "./WalletForm";

export default function ErrorPage({ setShowError }) {
  const [state, dispatch] = useContext(StateContext);
  const handleCreateWallet = () =>
    dispatch({ type: "SET_SHOW_MODAL", value: true });

  return (
    <div className="error-div">
      <img
        src="https://img.pngio.com/empty-wallet-global-nerdy-technology-and-tampa-bay-global-empty-wallet-png-600_398.png"
        alt=""
        id="empty-img"
      />
      <h3>Ooops!</h3>
      <p>You have no wallets! Start by creating one.</p>
      <Button onClick={handleCreateWallet} variant="primary">
        Create wallet
      </Button>
      {/* {state.showModal && <WalletForm setShowError={setShowError} />} */}
    </div>
  );
}
