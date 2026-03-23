import { TraversalMap } from "../algorithms/Tree Traversals";
import { useTraversal } from "../hooks/UseTraversal";
import Balls from "../components/Balls";
import Edge from "../components/Edge";
import Dropdown from "../components/Dropdown";
import Controls from "../components/Controls";
import SpeedSlider from "../components/SpeedSlider";
import TreeArea from "../components/TreeArea";
import { useState } from "react";

export default function Traversal() {
  const [treeType, setTreeType] = useState("Perfect");
  const [traversal, setTraversal] = useState("Inorder");

  const {
    balls,
    isTraversal,
    speed,
    setSpeed,
    startTraversal,
    generateTree,
  } = useTraversal(treeType, traversal);

  return (
<div className="p-4 md:p-6 w-full">
<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
        <Dropdown
          options={["Perfect", "Complete", "Full", "Balanced"]}
          value={treeType}
          onChange={setTreeType}
        />

        <Dropdown
          options={TraversalMap}
          value={traversal}
          onChange={setTraversal}
        />
      </div>

      {/* Tree Area */}
      <TreeArea>
        {balls.map((ball) => {
          const left = balls[ball.left];
          const right = balls[ball.right];

          return (
            <div key={ball.id}>
              {left && (
                <Edge x1={ball.x} y1={ball.y} x2={left.x} y2={left.y} />
              )}
              {right && (
                <Edge x1={ball.x} y1={ball.y} x2={right.x} y2={right.y} />
              )}
            </div>
          );
        })}

        <Balls balls={balls} />
      </TreeArea>

      {/* Bottom Controls */}
      <Controls
        generateObject={()=>generateTree(treeType)}
        onStart={startTraversal}
        isRunning={isTraversal}
      />

      <SpeedSlider speed={speed} setSpeed={setSpeed} />
    </div>
  );
}