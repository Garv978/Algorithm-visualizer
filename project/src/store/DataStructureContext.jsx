import { createContext, useContext, useState } from "react";

export const DataStructureContext = createContext();

export const DataStructureStateProvider = ({ children }) => {
  const [maxSize, setMaxSize] = useState(10);
  const [inputValue, setInputValue] = useState("");

  return (
    <DataStructureContext.Provider
      value={{
        maxSize,
        setMaxSize,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </DataStructureContext.Provider>
  );
};

// THIS is what you forgot to export
export function useDataStructureContext() {
  return useContext(DataStructureContext);
}