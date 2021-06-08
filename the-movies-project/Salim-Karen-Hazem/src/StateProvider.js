import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  movies: [],
  genreID: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.value };
    case "SET_GENRE":
      return { ...state, genreID: action.value };
    default:
      return state;
  }
}

export function StateProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
}
