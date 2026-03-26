import { createContext, useState } from "react";

export const AlgorithmContext = createContext();

export const AlgorithmStateProvider = ({ children }) => {
  const [speed, setSpeed] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  const value = {
    speed,
    setSpeed,
    isRunning,
    setIsRunning
  };

  return (
    <AlgorithmContext.Provider value={value}>
      {children}
    </AlgorithmContext.Provider>
  );
};