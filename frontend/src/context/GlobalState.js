// import React, { createContext, useReducer, useEffect} from "react";
// import AppReducer from "./AppReducer.js"

// const initialState={
//     watchlist: localStorage.getItem("watchlist")? JSON.parse(localStorage.getItem("watchlist")): []
// };

// // creating context
// export const GlobalContext= createContext("initialState");

// // providing components
// export const GlobalProvider= (props) =>{
//     const [state, dispatch]= useReducer(AppReducer, initialState)
// }

// const addMovieToWatchlist = (movie) => {
//     dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
//   };