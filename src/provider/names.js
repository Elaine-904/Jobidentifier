import React, { createContext, useContext } from "react";

import { names } from "../data";

// Create a context
export const NamesContext = createContext();

// Context provider
export function NamesProvider({ children }) {
  return (
    <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
  );
}

export function useNames(){
    const context = useContext(NamesContext)
    
    return context
}