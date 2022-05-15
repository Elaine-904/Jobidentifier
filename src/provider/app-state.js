import React, { createContext, useContext, useState } from "react";

// Context
const AppStateContext = createContext();

// Provider
export function AppStateProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [shortList, setShortList] = useState([]);

  // The context value object
  const value = {
    searchValue,
    setSearchValue,
    shortList,
    setShortList
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

// Custom hook
export function useAppState() {
  const context = useContext(AppStateContext);
  return context;
}