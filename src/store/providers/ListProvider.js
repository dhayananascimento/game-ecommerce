import React, { useState, createContext } from "react";

export const ListContext = createContext();

export default function ListProvider({ children }) {
  const [chart, setChart] = useState([]);

  return (
    <ListContext.Provider value={[ chart, setChart ]}>
      {children}
    </ListContext.Provider>
  );
}
