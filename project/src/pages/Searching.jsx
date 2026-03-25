import { useState,useEffect } from "react";
import { searchMap } from "../algorithms/Searching/index";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import Bars from "../components/Bars";
import Controls from "../components/Controls";
import SpeedSlider from "../components/SpeedSlider";
import { useSearching } from "../hooks/UseSearching";

export default function Searching(){
  const [numBars, setNumBars] = useState(20);
  const [search, setSearch] = useState("linear");
  const [searchValue, setSearchValue] = useState(null);

  const {
    bars,
    setBars,
    isSearching,
    speed,
    setSpeed,
    startSearching,
    generateBars,
  } = useSearching(numBars, searchValue, search);

  const pickRandomTarget = () => {
    if (bars.length === 0) return;

    const randomIndex = Math.floor(Math.random() * bars.length);
    const target = bars[randomIndex].value;
    setSearchValue(target);

    // Reset + highlight target
    const newBars = bars.map((bar, index) => ({
      ...bar,
      color: index === randomIndex ? "purple" : "blue",
    }));

    setBars(newBars);
  };

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
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        <Slider label={"number of bars"} value={numBars} setValue={setNumBars} min={10} max={100} />
        <Dropdown options={searchMap} value={search} onChange={setSearch} />
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={pickRandomTarget}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Pick Random Target
        </button>
      </div>

      {searchValue !== null && (
        <p className="mt-2">
          Target: <span className="text-purple-600 font-bold">{searchValue}</span>
        </p>
      )}

      <Bars bars={bars} />

<div className="flex flex-wrap gap-4 mt-4 justify-center text-xs md:text-sm">
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-blue-500"></div> Default
  </div>
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-purple-500"></div> Target
  </div>
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-yellow-500"></div> Pointer
  </div>
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-red-500"></div> Checking
  </div>
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-gray-500"></div> Visited
  </div>
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-green-500"></div> Found
  </div>
  <div className="flex items-center gap-1">
    <div className="w-4 h-4 bg-orange-500"></div> Not Found
  </div>
</div>


      <Controls
        generateObject={generateBars}
        onStart={startSearching}
        isRunning={isSearching}
      />

      <SpeedSlider speed={speed} setSpeed={setSpeed} />
    </div>
  );
};
