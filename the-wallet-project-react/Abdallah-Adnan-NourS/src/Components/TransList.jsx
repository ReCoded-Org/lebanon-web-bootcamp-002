import React, { useContext } from "react";
import { StateContext } from "../StateProvider";
import TransItem from "./TransItem";

export default function TransList() {
  const [state] = useContext(StateContext);
  const transactions = state.wallets.find(
    (wallet) => wallet.title === state.selectedWallet
  ).transactions;
  return (
    <ul id="ulData" className="list-group">
      {transactions &&
        transactions.map((trans) => (
          <>
            <TransItem transaction={trans} /> <hr />
          </>
        ))}
    </ul>
  );
}
