import React, { createContext, useReducer } from "react";
export const StateContext = createContext();

const initialState = {
  wallets:
    JSON.parse(window.localStorage.getItem("wallets")) == null
      ? []
      : JSON.parse(window.localStorage.getItem("wallets")),
  showModal: false,
  selectedWallet:
    JSON.parse(window.localStorage.getItem("wallets")) == null
      ? ""
      : JSON.parse(window.localStorage.getItem("wallets"))[0].title
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WALLET":
      const newState = {
        ...state,
        wallets: state.wallets.concat(action.value)
      };
      window.localStorage.setItem("wallets", JSON.stringify(newState.wallets));
      return newState;
    case "SET_TRANSACTION":
      const newState1 = {
        ...state,
        wallets: action.value
      };
      window.localStorage.setItem("wallets", JSON.stringify(newState1.wallets));
      return newState1;
    case "SET_SHOW_MODAL":
      return { ...state, showModal: !state.showModal };
    case "SET_SELECTED_WALLET":
      return { ...state, selectedWallet: action.value };
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
