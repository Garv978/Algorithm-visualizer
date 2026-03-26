import { useEffect, useRef, useState } from "react";

import { COLORS } from "../../utils/colors";
import { searchMap } from "../../algorithms/Searching/index";
import { sortedArray } from "../../utils/arrayGenerator";

export function useSearching(numBars, searchValue, search,speed) {
  const [bars, setBars] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const speedRef = useRef(speed);
  const stopSearching = useRef(false);
  const runID = useRef(0);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    generateBars();
  }, [numBars]);

  function generateBars() {
    runID.current++;
    stopSearching.current = true;
    setIsSearching(false);
    setBars(sortedArray(numBars));
    stopSearching.current = false;
  }

  function resetColors() {
    setBars((prev) =>
      prev.map((bar) => ({
        ...bar,
        color: COLORS.DEFAULT,
      }))
    );
  }

  async function startSearching() {
    if (isSearching || searchValue === null) return;

    resetColors();

    setIsSearching(true);
    stopSearching.current = false;
    runID.current++;

    let currentRunID = runID.current;

    const searchFunction = searchMap[search].search;

    await searchFunction(
      bars,
      setBars,
      speedRef,
      searchValue,
      stopSearching,
      currentRunID,
      runID,
    );

    setIsSearching(false);
  }

  return {
    bars,
    setBars,
    isSearching,
    startSearching,
    generateBars,
  };
}