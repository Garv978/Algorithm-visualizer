import {AlgorithmContext} from "./AlgorithmContext";
import {useContext} from "react";

export function useAlgorithmState(){
  
  const globalState = useContext(AlgorithmContext);

  return globalState;
}