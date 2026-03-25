import {GRIDCOLORS as COLORS} from "../utils/colors";

export default function Box({
  row,
  col,
  type,
  setGrid,
  tool,
  setSource,
  setDestination,
}) {
  function handleClick() {
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((r) => r.slice());

      if (tool === "wall") {
        if (newGrid[row][col] === 0) newGrid[row][col] = 1;
        else if (newGrid[row][col] === 1) newGrid[row][col] = 0;
      }

      if (tool === "source") {
        for (let r = 0; r < newGrid.length; r++) {
          for (let c = 0; c < newGrid.length; c++) {
            if (newGrid[r][c] === 2) newGrid[r][c] = 0;
          }
        }
        newGrid[row][col] = 2;
        setSource([row, col]);
      }

      if (tool === "destination") {
        for (let r = 0; r < newGrid.length; r++) {
          for (let c = 0; c < newGrid.length; c++) {
            if (newGrid[r][c] === 3) newGrid[r][c] = 0;
          }
        }
        newGrid[row][col] = 3;
        setDestination([row, col]);
      }

      return newGrid;
    });
  }

  return (
    <div
      onClick={handleClick}
      className={`
        w-6 h-6 md:w-7 md:h-7 
        border border-slate-400 
        ${COLORS[type]}
        transition-all duration-150
        hover:scale-110
      `}
    />
  );
}