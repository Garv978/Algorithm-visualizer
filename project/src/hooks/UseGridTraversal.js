import { useState, useRef, useEffect } from "react";
import { generateRandomGrid} from "../utils/gridGenerator";
import { GridTraversalMap } from "../algorithms/Graph Traversals/index";

export function useGridTraversal(dimension,source,traversal,destination) {
  const [grid, setGrid] = useState([]);
  const [isTraversal, setIsTraversal] = useState(false);
  const [speed, setSpeed] = useState(50);

  const speedRef = useRef(speed);
  const stopTraversal = useRef(false);
  const runID = useRef(0);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    generateGrid();
  }, [dimension]);

function generateGrid() {
  const newGrid = generateRandomGrid(dimension);
  setGrid(newGrid);
}

  async function startTraversal() {
    if (isTraversal) return;

    setIsTraversal(true);
    stopTraversal.current = false;
    runID.current++;

    const currentRunID = runID.current;
    const traversalFunction = GridTraversalMap[traversal].traversal;

    await traversalFunction(
      source,
      destination,
      dimension,
      grid,
      setGrid,
      speedRef,
      stopTraversal,
      runID,
      currentRunID
    );

    setIsTraversal(false);
  }

  return {
    grid,
    setGrid,
    isTraversal,
    speed,
    setSpeed,
    startTraversal,
    generateGrid,
  };
}