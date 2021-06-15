import React, { createContext, useReducer } from "react";
export const StateContext = createContext();

const initialState = { moviesData: [], movieID: 0, movieCast: [], actorID: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES_DATA":
      return { ...state, moviesData: action.value };
    case "SET_MOVIE_ID":
      return { ...state, movieID: action.value };
    case "SET_MOVIE_CAST":
      return { ...state, movieCast: action.value };
    case "SET_ACTOR_ID":
      return { ...state, actorID: action.value };
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, StateContext);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
