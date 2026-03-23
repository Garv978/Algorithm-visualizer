import { useState, useRef, useEffect } from "react";
import {
  fullBinaryTree,
  completeBinaryTree,
  perfectBinaryTree,
  balancedBinaryTree,
} from "../utils/treeGenerator";

import { TraversalMap } from "../algorithms/Tree Traversals";

export function useTraversal(treeType, traversal) {
  const [balls, setBalls] = useState([]);
  const [isTraversal, setIsTraversal] = useState(false);
  const [speed, setSpeed] = useState(50);

  const speedRef = useRef(speed);
  const stopTraversal = useRef(false);
  const runID = useRef(0);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    generateTree(treeType);
  }, [treeType]);

  function generateTree(treeType) {
    runID.current++;
    stopTraversal.current = true;
    setIsTraversal(false);

    let newBalls;

    if (treeType === "Perfect") newBalls = perfectBinaryTree();
    else if (treeType === "Complete") newBalls = completeBinaryTree();
    else if (treeType === "Full") newBalls = fullBinaryTree();
    else if (treeType === "Balanced") newBalls = balancedBinaryTree();

    setBalls(newBalls);
    stopTraversal.current = false;
  }

async function startTraversal() {
  if (isTraversal) return;

  setIsTraversal(true);
  stopTraversal.current = false;
  runID.current++;

  let currentRunID = runID.current;
  const traversalFunction = TraversalMap[traversal].traversal;

  // Reset colors before starting
  setBalls(prev => prev.map(b => ({ ...b, state: "default" })));

  // Start from root (index 0)
  await traversalFunction(
    0,              // root index
    balls,
    setBalls,
    speedRef,
    stopTraversal,
    currentRunID,
    runID.current
  );

  setIsTraversal(false);
}
  return {
    balls,
    isTraversal,
    speed,
    setSpeed,
    startTraversal,
    generateTree,
  };
}