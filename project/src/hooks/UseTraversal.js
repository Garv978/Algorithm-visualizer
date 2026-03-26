import {
  balancedBinaryTree,
  completeBinaryTree,
  fullBinaryTree,
  perfectBinaryTree,
} from "../utils/treeGenerator";
import { useEffect, useRef, useState } from "react";

import { TraversalMap } from "../algorithms/Tree Traversals";

export function useTraversal(treeType, traversal,speed) {
  const [balls, setBalls] = useState([]);
  const [isTraversal, setIsTraversal] = useState(false);

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
    runID.current++;                 // increment version
    stopTraversal.current = true;    // signal immediate stop
    setIsTraversal(false);

    let newBalls;
    if (treeType === "Perfect") newBalls = perfectBinaryTree();
    else if (treeType === "Complete") newBalls = completeBinaryTree();
    else if (treeType === "Full") newBalls = fullBinaryTree();
    else if (treeType === "Balanced") newBalls = balancedBinaryTree();

    newBalls = newBalls.map(ball => ({ ...ball, state: "default" }));
    setBalls(newBalls);

    // allow new traversal after a short delay
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
    const traversalFunction = TraversalMap[traversal].traversal;

    // fresh copy of balls (reset states)
    let freshBalls = balls.map(b => ({ ...b, state: "default" }));
    setBalls(freshBalls);

    // give UI time to update before starting
    await new Promise(r => setTimeout(r, 50));

    // call traversal with all necessary references
    await traversalFunction(
      0,
      freshBalls,
      setBalls,
      speedRef,
      stopTraversal,
      runID,       
      currentRunID
    );

    setIsTraversal(false);
  }

  return {
    balls,
    isTraversal,
    startTraversal,
    generateTree,
  };
}