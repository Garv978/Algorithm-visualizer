import { useState} from "react";
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

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <Slider value={numBars} setValue={setNumBars} />
        <WorstCase generateWorstCase={generateWorstCase} isSorting={isSorting}/>
        <Dropdown options={algorithmMap} value={algorithm} onChange={setAlgorithm} />
      </div>

      <Bars bars={bars} />

      <Controls
        generateObject={generateBars}
        onStart={startSorting}
        isRunning={isSorting}
      />
      <SpeedSlider speed={speed} setSpeed={setSpeed}/>
    </div>
  );
}