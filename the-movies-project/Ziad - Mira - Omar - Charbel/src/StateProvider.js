import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = {movie: [], genre: [], popularGenre: [], searched: [], trending: []};

const reducer = (state, action) => {
    
    switch (action.type) {
        case "SET_MOVIES":
            return {...state, movie: [...action.movie]};
        case "SET_GENRES":
            return {...state, genre: [action.genre]};
        case "SET_POPULAR_GENRE":
            return{...state, popularGenre: [action.popularGenre]};
        case "SET_SEARCHED":
            return {...state, searched:[action.searched]};
        case "SET_TRENDING":
            return {...state, trending: [action.trending] }
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