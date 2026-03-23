import { useState, useEffect } from "react";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Bars from "../components/Bars";
import Controls from "../components/Controls";
import SpeedSlider from "../components/SpeedSlider";
import WorstCase from "../components/WorstCase";

import { useSorting } from "../hooks/UseSorting";
import { algorithmMap } from "../algorithms/Sorting/index";

export default function Sorting() {
  const [numBars, setNumBars] = useState(20);
  const [algorithm, setAlgorithm] = useState("bubble");

  const {
    bars,
    isSorting,
    speed,
    setSpeed,
    startSorting,
    generateBars,
    generateWorstCase,
  } = useSorting(numBars, algorithm);

  useEffect(() => {
    const updateBars = () => {
      let newBars;

      if (window.innerWidth < 640) {
        newBars = 30;
      } else if (window.innerWidth < 1024) {
        newBars = 50;
      } else {
        newBars = 80;
      }

      setNumBars(newBars);
      generateBars(newBars);
    };

    updateBars();
    window.addEventListener("resize", updateBars);
    return () => window.removeEventListener("resize", updateBars);
  }, []);

  return (
    <div className="p-4 md:p-6 w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
        <Slider value={numBars} setValue={setNumBars} />
        <WorstCase generateWorstCase={generateWorstCase} isSorting={isSorting}/>
        <Dropdown options={algorithmMap} value={algorithm} onChange={setAlgorithm} />
      </div>

      <Bars bars={bars} />

      <Controls
        generateObject={() => generateBars(numBars)}
        onStart={startSorting}
        isRunning={isSorting}
      />

      <SpeedSlider speed={speed} setSpeed={setSpeed}/>
    </div>
  );
}