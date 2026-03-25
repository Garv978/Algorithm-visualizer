import { GridTraversalMap } from "../algorithms/Graph Traversals/index";
import { useGridTraversal } from "../hooks/UseGridTraversal";
import Grid from "../components/Grid";
import Dropdown from "../components/Dropdown";
import Controls from "../components/Controls";
import SpeedSlider from "../components/SpeedSlider";
import { useState } from "react";
import Slider from "../components/Slider";

export default function GridTraversal() {
  const [dimension, setDimension] = useState(10);
  const [source, setSource] = useState(null);
  const [traversal, setTraversal] = useState("DFS");
  const [destination, setDestination] = useState(null);
  const [grid, setGrid] = useState([]);
  const [tool, setTool] = useState("wall");
  const {isTraversal, speed, setSpeed, startTraversal, generateGrid } =
    useGridTraversal(dimension, source, traversal, destination);

  return (
    <div className="p-4 md:p-6 w-full">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
        <Slider
          label={"dimensions"}
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
      </div>

      <Grid
        grid={grid}
        setGrid={setGrid}
        tool={tool}
        setSource={setSource}
        setDestination={setDestination}
      />
      <Controls
        generateObject={() => generateGrid()}
        onStart={startTraversal}
        isRunning={isTraversal}
      />
      <Dropdown
        options={["wall", "source", "destination"]}
        value={tool}
        onChange={setTool}
      />

      <SpeedSlider speed={speed} setSpeed={setSpeed} />
    </div>
  );
}
