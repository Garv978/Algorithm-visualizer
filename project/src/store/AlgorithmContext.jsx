import { createContext, useState } from "react";

export const AlgorithmContext = createContext();

export const AlgorithmStateProvider = ({ children }) => {
  const [speed, setSpeed] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [numBars, setNumBars] = useState(20);
  
  const value = {
    speed,
    setSpeed,
    isRunning,
    setIsRunning,
    numBars,
    setNumBars,
  };

  return (
    <AlgorithmContext.Provider value={value}>
      {children}
    </AlgorithmContext.Provider>
  );
};