import React, { createContext, useReducer } from "react";
import { produce } from "immer";
export const WalletContext = createContext();

const initialState = {
  wallets: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WALLET":
      return produce(state, (draft) => {
        draft.wallets.push(action.wallet);
      });
    case "SET_TRANSACTIONS":
      return produce(state, (draft) => {
        let wallet = draft.wallets.find(
          (wallet) => wallet.id == action.transaction.id
        );
        wallet.transactions.push(action.transaction);
      });

    case "SET_BALANCE":
      console.log(action);
      return produce(state, (draft) => {
        let wallet = draft.wallets.find(
          (wallet) => wallet.id == action.wallet.id
        );
        wallet.balance.push(action.total);
      });
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <WalletContext.Provider value={[state, dispatch]}>
      {props.children}
    </WalletContext.Provider>
  );
};
