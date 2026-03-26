import AnalyticsBox from "../components/AnalyticsBox";
import Controls from "../components/Controls";
import Dropdown from "../components/Dropdown";
import Grid from "../components/Grid";
import { GridTraversalMap } from "../algorithms/Graph Traversals/index";
import Slider from "../components/Slider";
import SpeedSlider from "../components/SpeedSlider";
import { useAlgorithmState } from "../store/useAlgorithmState";
import { useGridTraversal } from "../hooks/UseGridTraversal";
import { useState } from "react";

export default function GridTraversal() {
  const [dimension, setDimension] = useState(10);
  const [traversal, setTraversal] = useState("DFS");
  const [tool, setTool] = useState("wall");

  const { speed, setSpeed } = useAlgorithmState();

  const {
    grid,
    setGrid,
    source,
    setSource,
    destination,
    setDestination,
    isTraversal,
    startTraversal,
    generateGrid,
    stats,
  } = useGridTraversal(dimension, traversal);

  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-6 w-full">
      <div className="bg-gray-100 rounded-xl p-4 mb-4 shadow flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <Slider
          label={"Grid Size"}
          value={dimension}
          setValue={setDimension}
          min={5}
          max={20}
        />

        <Dropdown
          options={GridTraversalMap}
          value={traversal}
          onChange={setTraversal}
        />

        <Dropdown
          options={["wall", "source", "destination"]}
          value={tool}
          onChange={setTool}
        />
      </div>

      <div className="bg-gray-100 rounded-xl p-4 shadow flex justify-center items-center mb-4">
        <Grid
          grid={grid}
          setGrid={setGrid}
          tool={tool}
          setSource={setSource}
          setDestination={setDestination}
        />
      </div>

      <div className="bg-gray-100 rounded-xl p-4 shadow flex flex-col md:flex-row justify-between items-center gap-4">
        <Controls
          generateObject={() => generateGrid(dimension)}
          onStart={startTraversal}
          isRunning={isTraversal}
        />

        <AnalyticsBox type="grid" stats={stats} />

        <SpeedSlider speed={speed} setSpeed={setSpeed} />
      </div>
    </div>
  );
}