import { DataStructureContext } from "./DataStructureContext";
import { useContext } from "react";

export function useDataStructureContext() {
  const globalState = useContext(DataStructureContext);

  return globalState;
}