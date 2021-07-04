import React, { useContext } from "react";
import { WalletContext } from "../StateProvider";
import TransactionCard from "./TransactionCard";
import { Container } from "react-bootstrap";
const Transaction = ({ currentWallet }) => {
  const [state] = useContext(WalletContext);
  // console.log(currentWallet);
  return (
    <Container
      Fluid
      className="mt-2 d-flex flex-wrap justify-content-center"
      style={{ flexDirection: "row" }}>
      {currentWallet.length !== 0 &&
        currentWallet.transactions.map((tran, i) => (
          <TransactionCard key={`${i}`} tran={tran} />
        ))}
    </Container>
  );
};

export default Transaction;
