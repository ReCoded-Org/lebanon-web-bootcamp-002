import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Oops from "../components/Oops";
import Nav from "../components/Nav";
import WalletForm from "../components/WalletForm";
import MyModal from "../components/MyModal";
import StateContextProvider from "../context/StateContext";

export default function App() {
  

  return (
    <>
      <Router>
        <StateContextProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Oops} />
            <Route path="/modal" component={MyModal} />
            <Route path="/walletForm/:id" component={WalletForm} />
          </Switch>
        </StateContextProvider>
      </Router>
    </>
  );
}
