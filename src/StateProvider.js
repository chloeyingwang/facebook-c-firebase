//what we use for datalayer
import React, { createContext, useContext, useReducer } from "react";

//we import the context api stuff

export const StateContext = createContext();
//this is essentially preparing datalayer

//the below is called a higher order component and we are using this to essentially wrap our app and it provide that data layer functionality, state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
//we use the useStateValue Hook to pull it
