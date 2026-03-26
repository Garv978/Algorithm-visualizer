import { randomArray, reverseArray, sortedArray } from "../utils/arrayGenerator";
import { useEffect, useRef, useState } from "react";

import { algorithmMap } from "../algorithms/Sorting/index";

export function useSorting(numBars, algorithm,speed) {
  const [bars, setBars] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const speedRef = useRef(speed);
  const stopSorting = useRef(false);
  const runID = useRef(0);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    generateBars();
  }, [numBars]);

  function generateBars() {
    runID.current++;
    stopSorting.current = true;
    setIsSorting(false);

    setBars(randomArray(numBars));

    stopSorting.current = false;
  }

  function generateWorstCase() {
    runID.current++;
    stopSorting.current = true;
    setIsSorting(false);
    if(algorithm== 'heap')
      setBars(sortedArray(numBars));
    else if(algorithm == 'merge' || algorithm == 'quick' || algorithm == 'bucket' || algorithm == 'radix' || algorithm == 'counting')
      setBars(randomArray(numBars));
    else
    setBars(reverseArray(numBars));

    stopSorting.current = false;
  }

  async function startSorting() {
    if (isSorting) return;

    setIsSorting(true);
    stopSorting.current = false;
    runID.current++;

    let currentRunID = runID.current;

    const sortFunction = algorithmMap[algorithm].sort;

    await sortFunction(
      bars,
      setBars,
      speedRef,
      stopSorting,
      currentRunID,
      runID
    );

    setIsSorting(false);
  }

  return {
    bars,
    setBars,
    isSorting,
    startSorting,
    generateBars,
    generateWorstCase,
    stopSorting,
  };
}