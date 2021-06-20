import React, { useState, useContext } from "react";
import { StateContext } from "../StateProvider";

export default function TransForm() {
  const [state, dispatch] = useContext(StateContext);
  const [transaction, setTransaction] = useState({
    balance: 0,
    income: true,
    tags: "",
    notes: ""
  });

  const handleIncExp = (event) => {
    // console.log(state.wallets);
    const inc = event.target.id == "income" ? true : false;
    setTransaction((prevTrans) => {
      return {
        ...prevTrans,
        income: inc
      };
    });
  };

  const handleAddTrans = () => {
    console.log(state.wallets);
    setTransaction({
      balance: 0,
      income: true,
      tags: "",
      notes: ""
    });
    const dateString = new Date().toLocaleString();
    transaction["date"] = dateString;
    const selectedWallet = state.selectedWallet;
    const wallets = state.wallets;
    const index = wallets.findIndex(
      (wallet) => wallet.title === selectedWallet
    );
    wallets[index].transactions.push(transaction);
    console.log(wallets[index].balance);
    if (transaction.income) {
      wallets[index].balance =
        parseInt(wallets[index].balance) + parseInt(transaction.balance);
    } else {
      wallets[index].balance =
        parseInt(wallets[index].balance) - parseInt(transaction.balance);
    }
    dispatch({ type: "SET_TRANSACTION", value: wallets });

    console.log(state.wallets);
  };

  return (
    <div className="container">
      <h1 id="balance">
        Wallet Balance:{" "}
        <span id="bal">
          {
            state.wallets.find(
              (wallet) => wallet.title === state.selectedWallet
            ).balance
          }
        </span>
      </h1>
      <div id="app"></div>
      <form>
        <label>Make a transaction:</label>
        <br />
        <input
          type="number"
          id="transaction"
          value={transaction.balance}
          onChange={(event) => {
            setTransaction((prevTrans) => {
              return { ...prevTrans, balance: event.target.value };
            });
          }}
        />

        <input
          type="radio"
          className="btn-check"
          name="options-outlined"
          id="income"
          onChange={handleIncExp}
        />
        <label class="btn btn-outline-success income" for="income">
          Income
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options-outlined"
          id="expense"
          autocomplete="off"
          onChange={handleIncExp}
        />
        <label class="btn btn-outline-danger expense" for="expense">
          Expense
        </label>
        <br />
        <br />
        <label>Transaction Notes</label>
        <br />
        <input
          type="text"
          id="notes"
          value={transaction.notes}
          onChange={(event) => {
            setTransaction((prevTrans) => {
              return { ...prevTrans, notes: event.target.value };
            });
          }}
        />
        <br />
        <br />
        <label>Transaction Tags</label>
        <br />
        <input
          type="text"
          id="tags"
          value={transaction.tags}
          onChange={(event) => {
            setTransaction((prevTrans) => {
              return { ...prevTrans, tags: event.target.value };
            });
          }}
        />
        <br />
        <br />
        <button
          type="button"
          id="trbtn"
          className="btn btn-primary"
          onClick={handleAddTrans}
        >
          Add Transaction
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}
