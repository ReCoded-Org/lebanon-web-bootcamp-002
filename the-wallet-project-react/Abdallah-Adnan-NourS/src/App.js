import "./styles.css";
import React, { useContext, useState } from "react";
import NavB from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
import TransForm from "./Components/TransForm";
import TransList from "./Components/TransList";
import WalletForm from "./Components/WalletForm";
import { StateContext } from "./StateProvider";
export default function App() {
  const [state] = useContext(StateContext);
  console.log(state.wallets.length);
  console.log(state.selectedWallet);
  const [showError, setShowError] = useState(
    state.wallets.length > 0 ? false : true
  );

  return (
    <div className="App">
      <NavB />
      {showError && <ErrorPage setShowError={setShowError} />}
      {!showError && <TransForm />}
      {!showError && <TransList />}
      {state.showModal && <WalletForm setShowError={setShowError} />}
    </div>
  );
}
