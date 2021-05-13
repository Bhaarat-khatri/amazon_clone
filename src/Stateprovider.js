import React, { createContext, useContext, useReducer } from "react";

//prepare datalayer
export const StateContext = createContext();

//wrap our app and provide the DAta layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull
export const useStateValue = () => useContext(StateContext);
