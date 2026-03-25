import { useState, useRef, useEffect } from "react";
import { generateRandomGrid } from "../utils/gridGenerator";
import { GridTraversalMap } from "../algorithms/Graph Traversals/index";

export function useGridTraversal(dimension,traversal) {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
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
    stopTraversal.current = true;
    runID.current++;
    setIsTraversal(false);

    const newGrid = generateRandomGrid(dimension);

    let src = null;
    let dest = null;

    for (let r = 0; r < dimension; r++) {
      for (let c = 0; c < dimension; c++) {
        if (newGrid[r][c] === 2) src = [r, c];
        if (newGrid[r][c] === 3) dest = [r, c];
      }
    }

    setGrid(newGrid);
    setSource(src);
    setDestination(dest);

    setTimeout(() => {
      stopTraversal.current = false;
    }, 50);
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
      currentRunID,
    );

    setIsTraversal(false);
  }

  return {
    grid,
    setGrid,
    source,
    setSource,
    destination,
    setDestination,
    isTraversal,
    speed,
    setSpeed,
    startTraversal,
    generateGrid,
  };
}
